import type { DefaultDocumentNodeResolver, StructureResolver } from 'sanity/desk'
import { IFramePreviewView } from './components/IFramePreviewView'
import { pageTypeValues } from '~/types'

import { BsBuilding } from 'react-icons/bs'
import { CogIcon } from '@sanity/icons'

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

    // Articles Category
    S.listItem().title('Articles').child(
      S.list().title('Articles').items([

        // Articles index
        S.listItem().title('Articles Index').icon(BsBuilding).child(
          S.document().schemaType('articlesIndex')
        ),

        // All articles
        S.documentTypeListItem('article').title('Article Entries'),
      ])
    ),

    // Settings
    S.divider(),
    S.listItem().title('Settings').icon(CogIcon).child(
      S.document().schemaType('settings')
    ),

  ])
}
