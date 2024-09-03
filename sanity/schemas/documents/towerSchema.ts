import { BsBuilding } from 'react-icons/bs'

import { makePageSchema, imageWithAlt } from '~/sanity/lib/schema'

import * as blocksSchemas from '../blocks'

export const towerSchema = makePageSchema({
  name: 'tower',
  icon: BsBuilding,
  contentFields: [
    {
      name: 'subheading',
      type: 'string',
      description: 'Sidebar/Nav subheading.',
    },
    {
      name: 'description',
      type: 'text',
      description: 'Sidebar/Nav Description.',
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

    imageWithAlt({
      name: 'garnish',
      description: `Semi-transparent "a"`,
    }),

    {
      name: 'blocks',
      title: 'Enhancements',
      type: 'array',
      group: 'content',
      of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
    }
  ]
})

