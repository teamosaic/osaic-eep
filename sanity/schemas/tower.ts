import { DocumentsIcon } from '@sanity/icons'
import { metaDescription } from './shared/seo'

export default {
  name: 'tower',
  type: 'document',
  title: 'Towers',
  icon: DocumentsIcon,
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
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'content',
    },
    {
      name: 'blocks',
      type: 'array',
      group: 'content',
      of: [
        { type: 'marqueeBlock' },
        { type: 'spacerBlock' },
      ]
    },
    metaDescription,
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      const uri = slug.current == '__home__' ? '/' : `/${slug.current}`
      return {
        title,
        subtitle: uri
      }
    }
  }
}
