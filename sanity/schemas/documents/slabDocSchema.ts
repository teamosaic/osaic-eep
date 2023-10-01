import { defineField, defineType } from "sanity";

export const slabDocSchema = defineType({
  name: 'slabDoc',
  type: 'document',
  title: 'Slab Doc',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the Slab Doc',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'embedUrl',
      type: 'string',
      title: 'Embed URL',
      description: 'The URL of the Slab Doc to embed. For example, https://bukwild.slab.com/embed/copy-block-s4wnte2b',
      validation: (Rule) => Rule.required(),
    }),
  ]
})
