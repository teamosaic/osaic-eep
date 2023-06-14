import type { DefaultDocumentNodeResolver } from 'sanity/desk'
import { IFramePreviewView } from '~/sanity/components/IFramePreviewView'

// For related docs, see
// https://www.sanity.io/docs/create-custom-document-views-with-structure-builder

// Add preview pane view to all documents that are pages (like not Settings)
export const addPreviewPane: DefaultDocumentNodeResolver = (S, ctx) => {

  // If not a page type, just return a normal document
  // const schemaType = ctx.schema.get(ctx.schemaType)
  if (ctx.schemaType == 'settings') return S.document()

  // Otherwise, add the preview pane view
  return S.document().views([
    S.view.form().title('Content'),
    S.view.component(IFramePreviewView).title('Preview'),
  ])
}
