import * as blocks from './schemas/blocks'
import * as documents from './schemas/documents'
import * as objects from './schemas/objects'
import type { SchemaTypeDefinition, TemplateResolver } from 'sanity'

// Define the singleton document types
export const singletonTypes = new Set(['settings'])

// The Sanity schema object
export const schema: {
  types: SchemaTypeDefinition[]
  templates: TemplateResolver,
} = {

  // The array of all types
  types: [
    ...Object.values(documents),
    ...Object.values(blocks),
    ...Object.values(objects),
  ],

  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

}
