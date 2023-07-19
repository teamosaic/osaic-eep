import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'

import { makeBlockSchema } from '~/sanity/lib/schema'

export const faqBlockSchema = makeBlockSchema({
  name: 'faqBlock',
  icon: TfiLayoutMediaCenterAlt,
  contentFields: [

    {
      name: 'title',
      type: 'string',
      description: 'FAQ section title.',
    },

    {
      name: 'faqs',
      type: 'array',
      of: [
        { type: 'faq' },
      ]
    }


  ]
})
