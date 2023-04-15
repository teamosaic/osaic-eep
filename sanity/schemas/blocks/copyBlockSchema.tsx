import { blockLayoutFields } from '../fragments/blockLayout'
import { blockBackgroundFields } from '../fragments/blockBackground'
import { portableTextSummary } from '~/sanity/lib/blocks'
import { BsCardText } from 'react-icons/bs'

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
    ...blockLayoutFields,
    ...blockBackgroundFields,
  ],
  preview: {
    select: {
      body: 'body',
      disabled: 'disabled',
    },
    prepare({ body, disabled }) {
      return {
        title: portableTextSummary(body),
        subtitle: 'Copy' + (disabled ? ' [Disabled]' : ''),
        media: <BsCardText />
      }
    }
  }
}
