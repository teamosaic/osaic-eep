import { CogIcon } from '@sanity/icons'
import { metaDescription, metaImage } from './fieldGroups/pageSeoSchema'
import { setGroup } from '~/sanity/lib/schema'

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

      {
        name: 'metaTitleSuffix',
        type: 'string',
        description: `When a Page doesn't have an explicit Meta Title, this value is appended to the Page title.  For example, "Homepage | Company Name" where "Company Name" is the Title Suffix value.`
      },

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
