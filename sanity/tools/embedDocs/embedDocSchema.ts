import { BsBook } from 'react-icons/bs'
import { defineField, defineType } from "sanity";

export const embedDocSchema = defineType({
  name: 'embedDoc',
  type: 'document',
  icon: BsBook,
  description: 'External, embeddable documents (such as Slabs) that populate the Docs section of this Sanity instance.',
  title: 'Embed Doc',
  fields: [

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the Doc page that will show in the table of contents.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'embedUrl',
      type: 'string',
      title: 'Embed URL',
      description: 'The URL of the doc to embed. For example, https://bukwild.slab.com/posts/copy-block-s4wnte2b',
      validation: (Rule) => Rule.required(),
    }),
  ]
})
