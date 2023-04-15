import { blockLayoutFields } from '../fragments/blockLayout'
import { portableTextSummary } from '~/sanity/lib/blocks'

export default {
  name: 'marqueeBlock',
  type: 'object',
  title: 'Marquee Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    },
    {
      name: 'background',
      type: 'image',
      title: 'Background Image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'title',
          type: 'string',
          description: 'This will be used as the image alt attribute.'
        }
      ]
    },
    ...blockLayoutFields,
  ],
  preview: {
    select: {
      body: 'body',
      background: 'background',
      disabled: 'disabled',
    },
    prepare({ body, background, disabled }) {
      return {
        title: portableTextSummary(body),
        subtitle: 'Marquee' + (disabled ? ' [Disabled]' : ''),
        media: background,
      }
    }
  }
}
