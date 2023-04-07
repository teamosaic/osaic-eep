import * as blocks from './schemas/blocksSchema'
import settings from './schemas/settingsSchema'
import tower from './schemas/towerSchema'
import article from './schemas/articleSchema'
import type { SchemaTypeDefinition, TemplateResolver } from 'sanity'

// Define the singleton document types
export const singletonTypes = new Set(["settings"])

// The Sanity schema object
export const schema: {
  types: SchemaTypeDefinition[]
  templates: TemplateResolver,
} = {

  // The array of all types
  types: [
    tower,
    article,
    settings,
    ...Object.values(blocks),
  ],

  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

}

