import { setGroup } from '~/sanity/lib/schema'

import { metaDescription, metaImage } from '../fieldGroups/pageSeoSchema'

export const settingsSchema = {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  groups: [
    {
      name: 'misc',
      title: 'Miscellaneous',
    },
    {
      name: 'seo',
      title: 'SEO Defaults',
    }
  ],
  fields: [
    ...setGroup('misc', [

      {
        name: 'instagram',
        type: 'url',
        description: 'Instagram'
      },
      {
        name: 'twitter',
        type: 'url',
        description: 'Twitter/X'
      },
      {
        name: 'linkedin',
        type: 'url',
        description: 'LinkedIn'
      },

      {
        name: 'footer',
        type: 'array',
        description: 'Footer Body',
        of: [{ type: 'block' }]
      },

    ]),

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
