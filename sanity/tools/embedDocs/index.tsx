import { DocumentTextIcon } from '@sanity/icons'

import EmbedDocs from "./EmbedDocs";

export const embedDocsTool = () => {
  return {
    title: 'CMS Docs', // Better name for clients.
    name: 'embed-docs',
    icon: DocumentTextIcon,
    component: EmbedDocs,
  }
}
