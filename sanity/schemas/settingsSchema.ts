import { CogIcon } from '@sanity/icons'
import { metaDescription } from './fragments/seo'

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
    metaDescription,
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
}
