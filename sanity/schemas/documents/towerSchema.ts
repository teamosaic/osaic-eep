import { BsBuilding } from 'react-icons/bs'

import { makePageSchema } from '~/sanity/lib/schema'
import { visual } from '~/sanity/lib/schema'

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
    visual({
      name: 'background',
      description: 'Large BG Image (recommended 1000x1600px)',
    }),
  ]
})

