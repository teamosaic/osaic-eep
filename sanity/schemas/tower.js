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
      name: 'body',
      type: 'text',
      description: 'Quickly testing out another field',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'marqueeBlock' }
      ]
    },
  ]
}
