import { BiBookAlt } from 'react-icons/bi'
import { defineField, defineType } from "sanity";

export const embedDocSchema = defineType({
  name: 'embedDoc',
  type: 'document',
  icon: BiBookAlt,
  description: 'External, embeddable documents (such as Slabs) that populate the Docs section of this Sanity instance.',
  title: 'Embed Doc',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the Embed Doc',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'embedUrl',
      type: 'string',
      title: 'Embed URL',
      description: 'The URL of the Embed Doc to embed. For example, https://bukwild.slab.com/embed/copy-block-s4wnte2b',
      validation: (Rule) => Rule.required(),
    }),
  ]
})
