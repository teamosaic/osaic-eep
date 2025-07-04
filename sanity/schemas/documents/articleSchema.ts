import { BsNewspaper } from 'react-icons/bs'

import { imageWithAlt, makePageSchema } from '~/sanity/lib/schema'

export const articleSchema = makePageSchema({
  name: 'article',
  uriPrefix: 'articles',
  icon: BsNewspaper,
  subtitleField: 'date',

  // add more groups
  groups: [
    {
      name: 'listing',
      title: 'Listing'
    }
  ],

  contentFields: [

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
      description: 'The main article text',
      group: 'content',
      of: [{ type: 'block' }]
    },

    // listing group fields
    imageWithAlt({
      name: 'image',
      group: 'listing',
      description: `A 16:9 image that's displayed in listing cards and on the Article detail page.`,
      required: true,
    }),

  ],

  orderings: [
    {
      title: 'Date Field', name: 'date',
      by: [
        { field: 'date', direction: 'desc', }
      ]
    }
  ],
})
