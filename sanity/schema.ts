import { SchemaTypeDefinition } from 'sanity'
import tower from './schemas/tower'
import * as blocks from './schemas/blocks'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    tower,
    ...Object.values(blocks),
  ],
}

