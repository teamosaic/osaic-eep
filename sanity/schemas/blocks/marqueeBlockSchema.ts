import { blockLayoutFields } from '../fragments/blockLayout'
import { makeBlockPreview } from '~/sanity/lib/blocks'

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

  preview: makeBlockPreview({
    blockName: 'Marquee',
    titleField: 'body',
    imageField: 'background',
  }),

}
