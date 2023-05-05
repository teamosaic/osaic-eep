import { BsBuilding } from 'react-icons/bs'
import { makeSingletonPageSchema } from '~/sanity/lib/schema'

export default makeSingletonPageSchema({
  name: 'articlesIndex',
  uri: '/articles',
  title: 'Articles Index',
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
  ],
})

