import { blockLayoutFields } from '../fragments/blockLayout'
import { makeBlockPreview, contentGroup, imageWithAlt } from '~/sanity/lib/schemaUtils'
import { button } from '../fragments/buttonsFragment'

export default {
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    ...contentGroup([
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
          button.fields.find(({ name }) => name == 'text'),
          {
            name: 'cta',
            title: 'CTA',
            description: 'Short text displayed to the right of the announcement text.',
            type: 'string',
            initialValue: 'Read more',
            validation: Rule => Rule.required(),
          },
          button.fields.find(({ name }) => name == 'url'),
        ]
      },
      imageWithAlt({
        name: 'background',
        description: 'Displayed behind the body copy.',
      }),
    ]),
    ...blockLayoutFields,
  ],

  preview: makeBlockPreview({
    blockName: 'Hero Block',
    titleField: 'body',
    imageField: 'background',
  }),

}
