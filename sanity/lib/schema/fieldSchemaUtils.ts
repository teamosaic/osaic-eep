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
