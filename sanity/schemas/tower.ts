import { DocumentsIcon } from '@sanity/icons'

export default {
  name: 'tower',
  type: 'document',
	title: 'Towers',
  icon: DocumentsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'marqueeBlock' },
        { type: 'spacerBlock' },
      ]
    },
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
