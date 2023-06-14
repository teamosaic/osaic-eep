import type { StructureResolver } from 'sanity/desk'
import { BsBuilding } from 'react-icons/bs'
import { CogIcon } from '@sanity/icons'

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
