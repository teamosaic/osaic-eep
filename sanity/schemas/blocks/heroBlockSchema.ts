import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'
import { makeBlockSchema, imageWithAlt } from '~/sanity/lib/schema'
import { button } from '../objects/buttonSchema'

export const heroBlockSchema = makeBlockSchema({
  name: 'heroBlock',
  icon: TfiLayoutMediaCenterAlt,
  contentFields: [

    {
      name: 'body',
      type: 'array',
      description: 'The copy text for the Hero.',
      of: [
        { type: 'block' },
        { type: 'buttonList' },
      ],
    },

    {
      name: 'announcementButton',
      type: 'object',
      description: 'A button shown above the body text used for an announcement that links to a separate page with more information.',
      fields: [
        {
          ...button.fields.find(({ name }) => name == 'text'),
          validation: null ,
        },
        {
          name: 'cta',
          title: 'CTA',
          description: 'Short text displayed to the right of the announcement text.',
          type: 'string',
          initialValue: 'Read more',
        },
        {
          ...button.fields.find(({ name }) => name == 'url'),
          validation: Rule => Rule.uri({ allowRelative: true }),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      }
    },

    imageWithAlt({
      name: 'background',
      description: 'Displayed behind the body copy.',
    }),
  ]
})
