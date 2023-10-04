import { BiBookAlt } from 'react-icons/bi'

import EmbedDocs from "./EmbedDocs";

export const embedDocsTool = () => {
  return {
    title: 'Docs',
    name: 'embed-docs',
    icon: BiBookAlt,
    component: EmbedDocs,
  }
}
