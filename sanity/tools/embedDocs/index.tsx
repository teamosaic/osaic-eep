import { DocumentTextIcon } from '@sanity/icons'

import EmbedDocs from "./EmbedDocs";

export const embedDocsTool = () => {
  return {
    title: 'Docs',
    name: 'embed-docs',
    icon: DocumentTextIcon,
    component: EmbedDocs,
  }
}
