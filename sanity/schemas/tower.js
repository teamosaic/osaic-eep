// schemas/pet.js
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
      validation: Rule => Rule.required()
    }
  ]
}
