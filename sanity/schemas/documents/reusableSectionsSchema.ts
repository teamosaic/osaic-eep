import { BsRecycle } from 'react-icons/bs';

import * as blocksSchemas from '../blocks'

export const reusableSectionsSchema = ({

    name: 'reusableSections',
    type: 'document',
    icon: BsRecycle,

    groups: [
      { name: 'content', title: 'Content', default: true, }
    ],

    fields: [

      {
        name: 'title',
        description: 'CMS Title',
        type: 'string',
        group: 'content',
      },

      {
        name: 'blocks',
        type: 'array',
        group: 'content',
        of: Object.values(blocksSchemas).map(({ name }) => ({ type: name }))
      }

    ]
})
