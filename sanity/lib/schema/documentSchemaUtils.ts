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
  title,
  icon,
  subtitleField = 'uri',
  uriPrefix,
  contentFields = [],
  orderings = [],
}: {
  name: string // The singular page name
  title?: string // Document title
  icon?: ReactNode | ComponentType // Icon for listing views
  subtitleField?: string // The field to pull the subtitle from
  uriPrefix?: string // Used to build the uri
  contentFields?: any[] // Sanity fields to add to content fields
  orderings?: SortOrdering[]
}): DocumentDefinition {
  return {
    name,
    type: 'document',
    title: title || pluralize(startCase(name)),
    icon: icon,

    groups: [
      { name: 'content', title: 'Content', default: true, },
      { name: 'seo', title: 'SEO' },
    ],

    fields: [

      // Title field
      {
        name: 'title',
        type: 'string',
        group: 'content',
        validation: Rule => Rule.required(),
      },

      // URI field
      uriField(uriPrefix),

      // The main content fields for the page
      ...contentGroup(contentFields),

      // SEO field group
      ...seoFields,
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

    // Customizeable order settings
    orderings,
  }
}

// Helper for making singleton / listing page type schemas
export function makeSingletonPageSchema({
  name,
  uri,
  title,
  icon,
  contentFields = [],
}: {
  name: string // The singular page name
  uri: string, // The uri for this singleton
  title: string // Document title
  icon?: ReactNode | ComponentType // Icon for listing views
  contentFields?: any[] // Sanity fields to add to content fields
}): DocumentDefinition {
  const documentTitle = title || pluralize(startCase(name))
  return {
    name,
    type: 'document',
    title: documentTitle,
    icon: icon,

    groups: [
      { name: 'content', title: 'Content', default: true, },
      { name: 'seo', title: 'SEO' },
    ],

    fields: [

      // Title field
      {
        name: 'title',
        type: 'string',
        group: 'content',
        validation: Rule => Rule.required(),
      },

      // Make a readonly uri field to be consistent with other page types
      // that uses the passed in uri
      {
        name: 'uri',
        type: 'slug',
        title: 'URI',
        group: 'content',
        readOnly: true,
        initialValue: { _type: 'slug', current: uri },
        description: 'The path to this entry.',
      },

      // The main content fields for the page
      ...contentGroup(contentFields),

      // SEO field group
      ...seoFields,
    ],

    // Make a preview using the document title
    preview: {
      select: {
        title: 'title',
      },
      prepare({ title }) {
        return {
          title: title || documentTitle,
          subtitle: uri,
        }
      }
    },

  }
}

