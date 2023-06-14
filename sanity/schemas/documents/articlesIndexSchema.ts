import { makeSingletonPageSchema } from '~/sanity/lib/schema'
import * as blocksSchemas from '../blocks'

export const articlesIndexSchema = makeSingletonPageSchema({
  name: 'articlesIndex',
  uri: '/articles',
  title: 'Articles Index',
  contentFields: [

    {
      name: 'headerBlocks',
      type: 'array',
      group: 'content',
      of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
    },

    {
      name: 'footerBlocks',
      type: 'array',
      group: 'content',
      of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
    },

  ],
})

