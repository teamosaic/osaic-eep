import { CogIcon } from '@sanity/icons'
import { metaDescription, metaImage } from './fieldGroups/pageSeoSchema'
import { setGroup } from '~/sanity/lib/schemaUtils'

export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  icon: CogIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO Defaults',
    },
  ],
  fields: [
    ...setGroup('seo', [
      metaDescription,
      metaImage,
    ]),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
}
