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
      name: 'embedDocs',
      title: 'Embed Docs',
      description: 'External, embeddable documents (such as Slabs) that populate the Docs section of this Sanity instance.',
      type: 'array',
      description: 'External, embeddable documents (such as Slabs) that populate the Docs section of this Sanity instance.',
      group: 'docs',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'embedDoc'},
          ]
        },
      ],
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
