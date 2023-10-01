import { DocumentTextIcon } from '@sanity/icons'

import SlabDocs from "~/sanity/tools/slabDocs/SlabDocs";

export const SlabDocsTool = () => {
  return {
    title: 'CMS Docs',
    name: 'cms-docs',
    icon: DocumentTextIcon,
    component: SlabDocs,
  }
}
