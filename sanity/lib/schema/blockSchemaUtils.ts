import startCase from 'lodash/startCase'
import { blockLayoutFields } from '~/sanity/schemas/fieldGroups/blockLayoutSchema'
import { blockBackgroundFields } from '~/sanity/schemas/fieldGroups/blockBackgroundSchema'
import type { ObjectDefinition } from 'sanity'
import { ComponentType, ReactNode } from 'react'
import { contentGroup, portableTextSummary } from '.'

// Helper for making standard block schemas
export function makeBlockSchema({
  name,
  titleField = 'body',
  icon,
  hasBackground = false,
  contentFields = [],
}: {
  name: string // The block name
  titleField?: string // The field the preview title is pulled from
  icon?: ReactNode | ComponentType // Icon for listing views
  hasBackground?: boolean // Whether to add blockBackgroundSchem
  contentFields?: any[], // Sanity fields to add to content fields
}): ObjectDefinition {
  return {
    name,
    type: 'object',
    title: startCase(name),

    groups: [
      { name: 'content', title: 'Content', default: true, },
      { name: 'layout', title: 'Layout' },
      ...( hasBackground ? [{ name: 'background', title: 'Background' }] : []),
    ],

    fields: [
      ...contentGroup(contentFields),
      ...blockLayoutFields,
      ...( hasBackground ? blockBackgroundFields : []),
    ],

    preview: makeBlockPreview({
      titleField: titleField,
      blockName: startCase(name.replace('Block', '')),
      icon,
    }),
  }
}

// Helper to DRY up making previews of blocks
export function makeBlockPreview({
  blockName,
  titleField,
  imageField,
  icon,
  hasTypes
}: {
  blockName: string
  titleField: string
  imageField?: string
  icon?: ReactNode | ComponentType
  hasTypes?: boolean, // Like if they block has a `types` field
}): ObjectDefinition["preview"] {
  return {

    select: {
      title: titleField,
      disabled: 'disabled',
      ...(imageField ? { image: imageField } : {}), // Optional
      ...(hasTypes ? { type: 'type' } : {}), // Optional
    },

    prepare({ title, disabled, image, type }) {

      // Auto stringify wysiwygs / blocks
      if (Array.isArray(title)) title = portableTextSummary(title)

      // Auto add the block type and disabled state
      const subtitle = blockName +
        (type ? ` - ${startCase(type)}` : '') +
        (disabled ? ' [Disabled]' : '')

      // Make the preview object
      return {
        title,
        media: image || icon,
        subtitle,
      }
    }
  }
}

