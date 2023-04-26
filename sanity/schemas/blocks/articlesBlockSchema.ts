import { makeBlockSchema } from '~/sanity/lib/schemaUtils'
import { BsNewspaper } from 'react-icons/bs'

export default makeBlockSchema({
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
