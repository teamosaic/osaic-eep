import { CogIcon } from '@sanity/icons'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
// import { BsBuilding } from 'react-icons/bs'
import type { StructureResolver } from 'sanity/desk'

export const structure: StructureResolver = (S, context) => {
  return S.list().title('Content').items([

    // Towers (calling them Enhancement Category)
    S.documentTypeListItem('tower').title('Pages'),

    orderableDocumentListDeskItem({
      type: 'enhancementCategory',
      title: 'Enhancement Categories',
      S,
      context
    }),

    // Settings
    S.divider(),
    S.listItem().title('Settings').icon(CogIcon).child(
      S.document().schemaType('settings')
    ),

  ])
}
