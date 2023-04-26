import { blockLayoutFields } from '../fieldGroups/blockLayoutSchema'
import { makeBlockPreview, contentGroup } from '~/sanity/lib/schemaUtils'
import { BsNewspaper } from 'react-icons/bs'

export default {
  name: 'articlesBlock',
  type: 'object',
  title: 'Articles Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
  ],

  fields: [
    ...contentGroup([

      {
        name: 'headline',
        type: 'array',
        description: 'Displayed above the list of Articles.',
        of: [ { type: 'block' }, ],
      },

    ]),
    ...blockLayoutFields,
  ],

  preview: makeBlockPreview({
    titleField: 'headline',
    blockName: 'Articles',
    icon: <BsNewspaper />,
  }),

}
