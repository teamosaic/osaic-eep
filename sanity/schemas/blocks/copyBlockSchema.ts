import { blockLayoutFields } from '../fragments/blockLayout'
import { blockBackgroundFields } from '../fragments/blockBackground'
import { portableTextSummary } from '~/sanity/lib/blocks'

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
    },
    prepare({ body }) {
      return {
        title: portableTextSummary(body),
        subtitle: 'Copy',
      }
    }
  }
}
