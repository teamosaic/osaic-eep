import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { visual } from '~/sanity/lib/schema'

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
      name: 'featured',
      type: 'boolean',
      description: 'Is this enhancement featured (visible on the home page list)',
      initialValue: false,
    },

    {
      name: 'featuredImage',
      type: 'boolean',
      description: 'If checked, the image will show as a thumbnail on the featured card',
      initialValue: false,
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

    visual({
      name: 'image',
      description: 'Main Image',
    }),


    {
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    },
    {
      name: 'ctaText',
      type: 'string',
      description: 'Link button text.',
    },
    {
      name: 'ctaUrl',
      type: 'url',
      description: 'Link URL.',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      description: 'If desired, this will show the red date above the enhancement entry.',
    },

    {
      name: 'tooltip',
      type: 'array',
      description: 'Special Users can see this tooltip next to the date',
      of: [
        { type: 'block' },
      ],
    },
  ]
})
