import startCase from 'lodash/startCase'
import pluralize from 'pluralize-esm'
import { blockLayoutFields } from '~/sanity/schemas/fieldGroups/blockLayoutSchema'
import { blockBackgroundFields } from '~/sanity/schemas/fieldGroups/blockBackgroundSchema'
import { seoFields } from '~/sanity/schemas/fieldGroups/pageSeoSchema'
import { uriField } from './uri'
import moment from 'moment'
import type {
  DocumentDefinition,
  FieldDefinition,
  ObjectDefinition,
  SortOrdering,
} from 'sanity' // node_modules/@sanity/types/lib/dts/src/index.d.ts
import { ComponentType, ReactNode } from 'react'

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

// Helper for making standard page type schemas
export function makePageSchema({
  name,
  icon = null,
  subtitleField = 'uri',
  uriPrefix = null,
  contentFields = [],
  orderings = [],
}: {
  name: string // The singular page name
  icon?: ReactNode | ComponentType // Icon for listing views
  subtitleField?: string // The field to pull the subtitle from
  uriPrefix?: string // Used to build the uri
  contentFields?: any[] // Sanity fields to add to content fields
  orderings?: SortOrdering[]
}): DocumentDefinition {
  return {
    name,
    type: 'document',
    title: pluralize(startCase(name)),
    icon: icon,

    groups: [
      { name: 'content', title: 'Content', default: true, },
      { name: 'seo', title: 'SEO' },
    ],

    fields: [

      { // Title and uri are standard for pages
        name: 'title',
        type: 'string',
        group: 'content',
        validation: Rule => Rule.required(),
      },

      uriField(uriPrefix),

      ...contentGroup(contentFields),


      ...seoFields, // SEO fields are also standard
    ],

    preview: {
      select: {
        title: 'title',
        subtitle: subtitleField,
      },
      prepare({ title, subtitle }) {

        // Format subtitle's for the URI
        if (subtitleField == 'uri') {
          subtitle = subtitle.current

          // Format subtitles that appear to be dates
        } else if (subtitleField.match(/date/i)
          || subtitleField.endsWith('At')) {
          subtitle = moment(subtitle).format('LLL').toString()
        }

        return { title, subtitle }
      }
    },

    orderings,
  }
}


// Create a Sanity options array from an enum type, supporting passing in
// custom title overrides
export function createListOptionsFromEnum(
  enumObj: object,
  customTitles: object = {}
):{ title: string, value: string }[] {
  return Object.entries(enumObj).map(([ title, value ]) => ({
    title: customTitles[value] || startCase(title),
    value
  }))
}

// Set all the fields to the "content" group
export function contentGroup(
  fields: FieldDefinition[]
): FieldDefinition[] {
  return setGroup('content', fields)
}

// Set a common "group" value to all fields
export function setGroup(
  groupName: string, fields: FieldDefinition[]
): FieldDefinition[] {
  return fields.map(field => {
    let groupValue: string[] | string;
    if ('group' in field) {
      if (Array.isArray(field.group)) groupValue = [...field.group, groupName]
      else groupValue = [field.group as string, groupName]
    } else {
      groupValue = groupName
    }
    return { group: groupValue, ...field }
  })
}

// Helper to DRY up making standard object schemas. This should be spread into
// the object variable
export function objectMixin({ title, titleField, imageField }: {
  title: string, // Used as subtitle
  titleField: string, // Field that will be used as the title
  imageField?: string,
}): {
  title: string
  type: 'object'
  preview: object,
} {
  return {
    title,
    type: 'object',
    preview: makeObjectPreview({
      objectTitle: title,
      titleField,
      imageField
    }),
  }
}

// Make a simple preview for an object
export function makeObjectPreview({ objectTitle, titleField, imageField }: {
  objectTitle: string, // Used as subtitle
  titleField: string, // Field that will be used as the title
  imageField?: string,
}): {
  select: object,
  prepare: Function,
} {
  return {

    select: {
      title: titleField,
      ...(imageField ? { image: imageField } : {}), // Optional
    },

    prepare({ title, image }) {
      return {
        title,
        subtitle: objectTitle,
        media: image,
      }
    }
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

// This gets the first block of text from a portableText array
// https://www.sanity.io/docs/previewing-block-content
export function portableTextSummary(blocks: any[]): string {
  const block = (blocks || []).find(block => block._type === 'block')
  if (!block) return 'No title'
  return block.children
    .filter(child => child._type === 'span')
    .map(span => span.text)
    .join('')
}

// Helper to render an image field with a "title" field for the image
export function imageWithAlt({
  name, title, description, hotspot = true, required
}: {
  name: string,
  title?: string,
  description?: string,
  hotspot?: boolean,
  required?: boolean,
}): FieldDefinition {
  return {
    name,
    type: 'image',
    title,
    description,
    options: {
      hotspot,
    },
    ...( required ? { validation: Rule => Rule.required() } : {}),
    fields: [
      {
        name: 'alt',
        title: 'Image Description',
        type: 'string',
        description: 'This will be used as the <img> alt attribute.'
      }
    ]
  }
}
