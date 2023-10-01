import { setGroup } from '~/sanity/lib/schema'

import { metaDescription, metaImage } from '../fieldGroups/pageSeoSchema'

export const settingsSchema = {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  groups: [
    {
      name: 'seo',
      title: 'SEO Defaults',
    },
    {
      name: 'docs',
      title: 'Docs',
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
    {
      name: 'slabDocs',
      title: 'Slab Docs',
      type: 'array',
      group: 'docs',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'slabDoc'},
          ]
        },
      ],
      // Showing this to only Buk users
      hidden: (props) => {
        const userEmail: string = props?.currentUser?.email
        return !(userEmail.includes('@bkwld.com') || userEmail.includes('@bukwild.com'));
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
}
