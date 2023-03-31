export default {
  name: 'tower',
  type: 'document',
	title: 'Towers',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'marqueeBlock' },
        { type: 'spacerBlock' },
      ]
    },
  ]
}
