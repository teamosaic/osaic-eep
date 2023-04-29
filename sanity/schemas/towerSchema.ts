import { BsBuilding } from 'react-icons/bs'
import { makePageSchema } from '~/sanity/lib/schema'

export default makePageSchema({
  name: 'tower',
  icon: BsBuilding,
  contentFields: [
    {
      name: 'blocks',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroBlock' },
        { type: 'ctaBlock' },
        { type: 'articlesBlock' },
      ]
    }
  ]
})

