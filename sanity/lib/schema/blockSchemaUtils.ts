import { blockBackgroundFields } from '~/sanity/schemas/fieldGroups/blockBackgroundSchema'
import { blockLayoutFields } from '~/sanity/schemas/fieldGroups/blockLayoutSchema'
import { ComponentType, ReactNode } from 'react'
import { contentGroup } from './fieldGroupSchemaUtils'
import { portableTextSummary } from './fieldSchemaUtils'
import startCase from 'lodash/startCase'
import type { ObjectDefinition, FieldDefinition } from 'sanity'

// Helper for making standard block schemas
export function makeBlockSchema({
  name,
  title,
  titleField = 'body',
  icon,
  hasBackground,
  contentFields = [],
}: {
  name: string // The block name
  title?: string // Explicit block title
  titleField?: string // The field the preview title is pulled from
  icon?: ReactNode | ComponentType // Icon for listing views
  hasBackground?: boolean // Whether to add blockBackgroundSchema
  contentFields?: FieldDefinition[], // Sanity fields to add to content group
}): ObjectDefinition {

  // Use explicit title if provided
  const blockTitle = title || startCase(name)

  // Check if there is a type field for use in the preview
  const hasTypes = contentFields.some(field => field.name == 'type')

  return {
    name,
    type: 'object',
    title: blockTitle,

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
      blockName: blockTitle.replace('Block', ''),
      icon,
      hasTypes,
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

