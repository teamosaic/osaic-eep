import { BsBuilding } from 'react-icons/bs'
import { makePageSchema } from '~/sanity/lib/schema'
import * as blocksSchemas from '../blocks'

export const towerSchema = makePageSchema({
  name: 'tower',
  icon: BsBuilding,
  contentFields: [
    {
      name: 'blocks',
      type: 'array',
      group: 'content',
      of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
    }
  ]
})

