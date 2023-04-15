import { DefaultDocumentNodeResolver, ListItemBuilder, StructureResolver } from 'sanity/desk'
import { IFramePreviewView } from './components/IFramePreviewView'
import { singletonTypes } from './schema'
import type { SchemaType } from 'sanity'
import { pageTypeValues } from '~/types'

// Example on how to add views for a schemaType
// https://www.sanity.io/docs/create-custom-document-views-with-structure-builder
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx) => {
  const schemaType = ctx.schema.get(ctx.schemaType)

  // Enable preview based on pageTypeValues enum
  if (pageTypeValues.includes(schemaType.name)) {
    return S.document().views([
      S.view.form().title('Content'),
      S.view.component(IFramePreviewView).title('Preview'),
    ])
  }

  return S.document()
}

export const structure: StructureResolver = (S, context) => {
  return S.list()
    .title('Content')
    .items([

      // List all other content types except singletons
      ...S.documentTypeListItems()
        .filter((item: ListItemBuilder) => {
            const schemaType = getSchemaTypeName(item.getSchemaType())
            return !singletonTypes.has(schemaType)
          }),

      // List all singletons
      ...S.documentTypeListItems()
        .filter((item: ListItemBuilder) => {
          const schemaType = getSchemaTypeName(item.getSchemaType())
          return singletonTypes.has(schemaType)
        })

        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        // https://www.sanity.io/guides/singleton-document
        .map((item: ListItemBuilder) => {
          const schemaType = getSchemaTypeName(item.getSchemaType())
          return item.child(S.document()
            .schemaType(schemaType)
            .documentId(schemaType))
        })

      // Example of explicitly adding a non-singleton
      // S.documentTypeListItem("blogPost").title("Blog Posts"),

      // Example of explicitly adding a singleton
      // S.listItem()
      //  .title('Settings')
      //  .id('settings')
      //  .child(S.document().schemaType('settings').documentId('settings'))

    ])
}

function getSchemaTypeName(schemaType: string | SchemaType):string {
  return typeof schemaType == 'string' ? schemaType : schemaType.name
}
