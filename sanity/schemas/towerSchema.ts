import { BsBuilding } from 'react-icons/bs'
import { metaDescription } from './fragments/seo'
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
        { type: 'marqueeBlock' },
        { type: 'copyBlock' },
        { type: 'heroBlock' },
      ]
    },
    metaDescription,
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
