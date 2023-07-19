import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'

import { makeBlockSchema } from '~/sanity/lib/schema'

export const faq = {
  name: 'faq',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    {
      name: 'question',
      description: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'answer',
      description: 'Answer',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'buttonList' },
      ],
    },
  ],
}

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
