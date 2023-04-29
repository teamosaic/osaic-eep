import startCase from 'lodash/startCase'
import pluralize from 'pluralize-esm'
import { seoFields } from '~/sanity/schemas/fieldGroups/pageSeoSchema'
import { uriField } from '~/sanity/lib/uri'
import moment from 'moment'
import type { DocumentDefinition, SortOrdering } from 'sanity'
import { ComponentType, ReactNode } from 'react'
import { contentGroup } from '.'

// Helper for making standard page type schemas
export function makePageSchema({
  name,
  icon = null,
  subtitleField = 'uri',
  uriPrefix = null,
  contentFields = [],
  orderings = [],
}: {
  name: string // The singular page name
  icon?: ReactNode | ComponentType // Icon for listing views
  subtitleField?: string // The field to pull the subtitle from
  uriPrefix?: string // Used to build the uri
  contentFields?: any[] // Sanity fields to add to content fields
  orderings?: SortOrdering[]
}): DocumentDefinition {
  return {
    name,
    type: 'document',
    title: pluralize(startCase(name)),
    icon: icon,

    groups: [
      { name: 'content', title: 'Content', default: true, },
      { name: 'seo', title: 'SEO' },
    ],

    fields: [

      { // Title and uri are standard for pages
        name: 'title',
        type: 'string',
        group: 'content',
        validation: Rule => Rule.required(),
      },

      uriField(uriPrefix),

      ...contentGroup(contentFields),


      ...seoFields, // SEO fields are also standard
    ],

    preview: {
      select: {
        title: 'title',
        subtitle: subtitleField,
      },
      prepare({ title, subtitle }) {

        // Format subtitle's for the URI
        if (subtitleField == 'uri') {
          subtitle = subtitle.current

          // Format subtitles that appear to be dates
        } else if (subtitleField.match(/date/i)
          || subtitleField.endsWith('At')) {
          subtitle = moment(subtitle).format('LLL').toString()
        }

        return { title, subtitle }
      }
    },

    orderings,
  }
}
