import { BsBook } from 'react-icons/bs'

import EmbedDocs from "./EmbedDocs";

export const embedDocsTool = () => {
  return {
    title: 'Docs',
    name: 'embed-docs',
    icon: BsBook,
    component: EmbedDocs,
  }
}
