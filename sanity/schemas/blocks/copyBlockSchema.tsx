import { blockLayoutFields } from '../fragments/blockLayout'
import { blockBackgroundFields } from '../fragments/blockBackground'
import { makeBlockPreview } from '~/sanity/lib/blocks'
import { BsCardText } from 'react-icons/bs'
import { createListOptionsFromEnum } from '~/sanity/lib/options'
import { TextAlignment } from '~/types'

export default {
  name: 'copyBlock',
  type: 'object',
  title: 'Copy Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
    { name: 'background', title: 'Background' },
  ],
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    },
    {
      name: 'textAlignment',
      type: 'string',
      group: 'content',
      description: 'Applies text alignment to the whole Body text.',
      initialValue: TextAlignment.Center,
      options: {
        list: createListOptionsFromEnum(TextAlignment),
        layout: 'radio',
      },
    },
    ...blockLayoutFields,
    ...blockBackgroundFields,
  ],

  preview: makeBlockPreview({
    blockName: 'Copy',
    titleField: 'body',
    icon: <BsCardText />,
  }),

}
