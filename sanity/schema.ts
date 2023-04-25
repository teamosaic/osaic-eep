import settings from './schemas/settingsSchema'
import tower from './schemas/towerSchema'
import article from './schemas/articleSchema'
import marqueeBlock from './schemas/blocks/marqueeBlockSchema'
import copyBlock from './schemas/blocks/copyBlockSchema'
import heroBlock from './schemas/blocks/heroBlockSchema'
import ctaBlock from './schemas/blocks/ctaBlockSchema'
import { button, buttonList } from './schemas/fragments/buttonsFragment'
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

    // Documents
    tower,
    article,
    settings,

    // Legacy blocks
    marqueeBlock,
    copyBlock,

    // Blocks
    heroBlock,
    ctaBlock,

    // Misc Objects
    button,
    buttonList,
  ],

  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

}

