import { FaQuestion } from 'react-icons/fa'

export const faq = {
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  icon: FaQuestion,
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
