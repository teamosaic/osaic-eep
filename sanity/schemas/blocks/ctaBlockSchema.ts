import { blockLayoutFields } from '../fieldGroups/blockLayoutSchema'
import { blockBackgroundFields } from '../fieldGroups/blockBackgroundSchema'
import { makeBlockPreview, contentGroup } from '~/sanity/lib/schema'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { createListOptionsFromEnum } from '~/sanity/lib/schema'
import { CtaBlockType } from '~/types'

export default {
  name: 'ctaBlock',
  type: 'object',
  title: 'CTA Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
    { name: 'background', title: 'Background' },
  ],

  fields: [
    ...contentGroup([

      {
        name: 'type',
        type: 'string',
        validation: Rule => Rule.required(),
        initialValue: CtaBlockType.SimpleCentered,
        options: {
          list: createListOptionsFromEnum(CtaBlockType, {
            [CtaBlockType.SimpleCentered]: 'Simple - Centered',
            [CtaBlockType.SimpleJustified]: 'Simple - Justified',
          }),
          layout: 'radio'
        }
      },

      {
        name: 'body',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'buttonList' },
        ],
      },

      // Only show buttons when they can't be rendered within the body field
      {
        name: 'buttons',
        type: 'array',
        hidden: ({ parent }) => parent.type != CtaBlockType.SimpleJustified,
        of: [
          { type: 'button' },
        ]
      }

    ]),
    ...blockLayoutFields,
    ...blockBackgroundFields,
  ],

  preview: makeBlockPreview({
    blockName: 'CTA',
    titleField: 'body',
    icon: TfiLayoutCtaCenter,
    hasTypes: true,
  }),

}
