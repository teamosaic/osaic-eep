import { BsNewspaper } from 'react-icons/bs'
import { metaDescription } from './shared/seo'
import { uriField } from '../lib/uri'
import moment from 'moment'

export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  icon: BsNewspaper,
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
      hidden: true, // Mid deprecation
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
    },
    uriField('articles'),
    {
      name: 'date',
      type: 'datetime',
      group: 'content',
      description: 'The displayed date of the Article. Also used to order the Article in listings.',
      initialValue: (new Date()).toISOString(),
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'LL',
        timeFormat: 'LT'
      },
    },
    {
      name: 'body',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }]
    },
    metaDescription,
  ],
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [
        {
          field: 'date',
          direction: 'desc',
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      // const uri = slug.current == '__home__' ? '/' : `/${slug.current}`
      return {
        title,
        subtitle: moment(date).format('LLL').toString(),
      }
    }
  }
}
