import { BsBuilding } from 'react-icons/bs'
import { metaDescription } from './shared/seo'

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
    {
      name: 'slug',
      type: 'slug',
      group: 'content',
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
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
