import { blockLayoutFields } from '../../fragments/blockLayout'
import { makeBlockPreview, contentGroup } from '~/sanity/lib/blocks'

export default {
  name: 'simpleCenteredWithBackgroundImageHeroBlock',
  type: 'object',
  title: 'Hero Block - Simple Centered With Background Image',
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
    blockName: 'Hero Block - Simple Centered With Background Image',
    titleField: 'body',
    imageField: 'background',
  }),

}
