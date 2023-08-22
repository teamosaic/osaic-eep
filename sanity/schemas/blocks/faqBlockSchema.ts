import { FaQuestionCircle } from 'react-icons/fa'

import { makeBlockSchema } from '~/sanity/lib/schema'

export const faqBlockSchema = makeBlockSchema({
  name: 'faqBlock',
  title: 'FAQ Block',
  titleField: 'title',
  icon: FaQuestionCircle,
  hasBackground: true,
  contentFields: [

    {
      name: 'title',
      type: 'string',
      description: 'Displayed above the FAQ list.',
    },

    {
      name: 'faqs',
      title: 'FAQs',
      description: 'A list of collapsable questions and answers.',
      type: 'array',
      of: [
        { type: 'faq' },
      ]
    }


  ]
})
