import { CogIcon } from '@sanity/icons'

export default {
  name: 'settings',
  type: 'document',
	icon: CogIcon,
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
	],
  fields: [
    {
      name: 'defaultMetaDescription',
			description: 'Best practice is to stay under 160 characters.',
      type: 'text',
			group: 'seo',
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
