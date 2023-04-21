import { blockLayoutFields } from '../fragments/blockLayout'
import { makeBlockPreview, contentGroup } from '~/sanity/lib/schemaUtils'

export default {
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    ...contentGroup([
      {
        name: 'body',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'buttonsList' },
        ],
      },
      {
        name: 'background',
        type: 'image',
        title: 'Background Image',
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
    ]),
    ...blockLayoutFields,
  ],

  preview: makeBlockPreview({
    blockName: 'Hero Block',
    titleField: 'body',
    imageField: 'background',
  }),

}
