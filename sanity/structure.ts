import { CogIcon } from '@sanity/icons'
import { BsBuilding } from 'react-icons/bs'
import type { StructureResolver } from 'sanity/desk'

export const structure: StructureResolver = (S, context) => {
  return S.list().title('Content').items([

    // Pages
    S.listItem().title('Home Page').icon(BsBuilding).child(
      S.document().schemaType('homePage').title('Home Page')
    ),

    // Towers (calling them Enhancement Category)
    S.documentTypeListItem('tower').title('Enhancement Category'),

    // Reusable Sections
    // S.divider(),
    // S.documentTypeListItem('reusableSections').title('Reusable Sections'),

    // Settings
    S.divider(),
    S.listItem().title('Settings').icon(CogIcon).child(
      S.document().schemaType('settings')
    ),

  ])
}
