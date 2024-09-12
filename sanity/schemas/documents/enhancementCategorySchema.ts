import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { BsBuilding } from 'react-icons/bs'

import { makePageSchema } from '~/sanity/lib/schema'

import * as blocksSchemas from '../blocks'

export const enhancementCategorySchema = makePageSchema({
  name: 'enhancementCategory',
  icon: BsBuilding,
  uriPrefix: 'enhancements',
  orderings: [orderRankOrdering],
  contentFields: [
    orderRankField({ type: "enhancementCategory" }),
    {
      name: 'subheading',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'theme',
      type: 'color',
      description: 'Main color theme',
      required: true,
      options: {
        colorList: [
          '#15535E',
          '#CBFA40'
        ]
      }
    },

    {
      name: 'blocks',
      title: 'Enhancements',
      type: 'array',
      group: 'content',
      of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
    },

  ]
})

