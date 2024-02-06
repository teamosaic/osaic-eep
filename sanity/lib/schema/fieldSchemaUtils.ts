import startCase from 'lodash/startCase'
import type { FieldDefinition } from 'sanity'

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

export function imageWithAlt({
  name, title, group = 'content', description, hotspot = true, required
}: {
  name: string,
  title?: string,
  group?: string
  description?: string,
  hotspot?: boolean,
  required?: boolean,
}): FieldDefinition {
  return {
    name,
    type: 'image',
    group,
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

export function videoWithAlt({
  name, title, description, required
}: {
  name: string,
  title?: string,
  description?: string,
  required?: boolean,
}): FieldDefinition {
  return {
    name,
    type: 'file',
    title,
    description,
    ...( required ? { validation: Rule => Rule.required() } : {}),
    fields: [
      {
        name: 'alt',
        title: 'Video Description',
        type: 'string',
        description: 'This will be used as an `aria-label` attribute.',
        options: { accept: 'video/*' },
      }
    ]
  }
}

export function visual({
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
    type: 'object',
    title,
    description,
    fields: [
      {
        name: 'image',
        type: 'image',
        description: 'If a video is also specified, this will be used as the poster image.',
        options: { hotspot },
        ...( required ? { validation: Rule => Rule.required() } : {}),
      },
      {
        name: 'video',
        type: 'file',
        description: 'An MP4 compressed with a bitrate of around 4Mbps is recommended.',
        options: { accept: 'video/*' },
        ...( required ? { validation: Rule => Rule.required() } : {}),
      },
      {
        name: 'alt',
        title: 'Description',
        type: 'string',
        description: 'This will be used as the img `alt` or video `aria-label` attribute.'
      }
    ]
  }
}

