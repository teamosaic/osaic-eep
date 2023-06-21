import { BsNewspaper } from 'react-icons/bs'

import { makeBlockSchema } from '~/sanity/lib/schema'

export const articlesBlockSchema = makeBlockSchema({
  name: 'articlesBlock',
  titleField: 'headline',
  icon: BsNewspaper,
  contentFields: [
    {
      name: 'headline',
      type: 'array',
      description: 'Displayed above the list of Articles.',
      of: [ { type: 'block' }, ],
    },
  ],
})
