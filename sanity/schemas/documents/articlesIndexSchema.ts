import { BsBuilding } from 'react-icons/bs'
import { makePageSchema } from '~/sanity/lib/schema'

export default makePageSchema({
  name: 'articlesIndex',
  icon: BsBuilding,
  contentFields: [

    {
      name: 'headerBlocks',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroBlock' },
        { type: 'ctaBlock' },
        { type: 'articlesBlock' },
      ]
    },

    {
      name: 'footerBlocks',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroBlock' },
        { type: 'ctaBlock' },
        { type: 'articlesBlock' },
      ]
    },

  ]
})

