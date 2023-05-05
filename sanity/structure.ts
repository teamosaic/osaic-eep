import type { DefaultDocumentNodeResolver, StructureResolver } from 'sanity/desk'
import { IFramePreviewView } from './components/IFramePreviewView'
import { pageTypeValues } from '~/types'

import articlesIndexSchema from './schemas/documents/articlesIndexSchema'
import settingsSchema from './schemas/documents/settingsSchema'


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
  return S.list().title('Content').items([

    // Towers
    S.documentTypeListItem('tower').title('Towers'),

    // Articles
    S.listItem().title('Articles').child(
      S.list().title('Articles').items([

        // Articles index
        makeSingletonListItem(S, articlesIndexSchema),

        // All articles
        S.documentTypeListItem('article').title('Article Entries'),
      ])
    ),

    // Settings
    S.divider(),
    makeSingletonListItem(S, settingsSchema),

  ])
}



function makeSingletonListItem(S, schema) {
  return S.listItem()
    .title(schema.title)
    .icon(schema.icon)
    .child(
      S.document()
        .schemaType(schema.name)
        .documentId(schema.name)
    )
}
