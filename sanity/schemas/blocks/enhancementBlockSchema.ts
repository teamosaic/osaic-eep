import { TfiLayoutCtaCenter } from 'react-icons/tfi'

import { createListOptionsFromEnum, makeBlockSchema } from '~/sanity/lib/schema'
import { EnhancementBlockType, EnhancementCardTheme } from '~/types'

export const enhancementBlockSchema = makeBlockSchema({
  name: 'enhancementBlock',
  title: 'Enhancement',
  icon: TfiLayoutCtaCenter,
  hasBackground: false,
  contentFields: [
    {
      name: 'enhancementTitle',
      type: 'string',
      description: 'Enhancement Title',
    },
    {
      name: 'type',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: EnhancementBlockType.Simple,
      options: {
        list: createListOptionsFromEnum(EnhancementBlockType, {
          [EnhancementBlockType.Simple]: 'Simple',
          [EnhancementBlockType.Rich]: 'Rich - Full Image',
        }),
        layout: 'radio'
      }
    },

    {
      name: 'cardTheme',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: EnhancementCardTheme.Default,
      options: {
        list: createListOptionsFromEnum(EnhancementCardTheme, {
          [EnhancementCardTheme.Default]: 'Default - White',
          [EnhancementCardTheme.Red]: 'Red w/ white text',
          [EnhancementCardTheme.Green]: 'Green w/ white text',
        }),
        layout: 'radio'
      }
    },

    {
      name: 'image',
      type: 'image',
      description: 'Main Image',
    },
    {
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      description: 'Link button text.',
    },
    {
      name: 'ctaUrl',
      type: 'url',
      description: 'Link URL.',
    }
  ]
})
