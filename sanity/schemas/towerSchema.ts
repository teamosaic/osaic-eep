import { BsBuilding } from 'react-icons/bs'
import { seoFields } from './fieldGroups/pageSeoSchema'
import { uriField } from '../lib/uri'

export default {
  name: 'tower',
  type: 'document',
  title: 'Towers',
  icon: BsBuilding,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [

    {
      name: 'title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required(),
    },

    uriField(),

    {
      name: 'blocks',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroBlock' },
        { type: 'ctaBlock' },
        { type: 'articlesBlock' },
      ]
    },

    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
      uri: 'uri',
    },
    prepare({ title, uri }) {
      return {
        title,
        subtitle: uri.current,
      }
    }
  }
}
