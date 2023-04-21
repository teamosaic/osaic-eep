import { RxButton } from 'react-icons/rx'
import { objectMixin } from '~/sanity/lib/schemaUtils'
import { createListOptionsFromEnum } from '~/sanity/lib/options'
import { ButtonIcons } from '~/types'

const commonButtonFields = [
  {
    name: 'text',
    description: 'The text displayed within the button.',
    type: 'string',
    validation: Rule => Rule.required(),
  },
  {
    name: 'url',
    title: 'URL',
    description: 'Where the button links to.',
    type: 'url',
    validation: Rule => Rule.required().uri({ allowRelative: true }),
  },
  {
    name: 'icon',
    description: 'Show to the right of the text.',
    type: 'string',
    options: {
      list: createListOptionsFromEnum(ButtonIcons),
    }
  },
]

export const primaryButton = {
  name: 'primaryButton',
  icon: RxButton,
  fields: commonButtonFields,
  ...objectMixin({
    title: 'Primary Button',
    titleField: 'text',
  }),
}

export const secondaryButton = {
  name: 'secondaryButton',
  icon: RxButton,
  fields: commonButtonFields,
  ...objectMixin({
    title: 'Secondary Button',
    titleField: 'text',
  }),
}

export const textButton = {
  name: 'textButton',
  icon: RxButton,
  fields: commonButtonFields,
  ...objectMixin({
    title: 'Text Button',
    titleField: 'text',
  }),
}

// Lists all the button options, for use in PortableText
export const buttonsList = {
  name: 'buttonsList',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'buttons',
      type: 'array',
      of: [
        { type: 'primaryButton' },
        { type: 'secondaryButton' },
        { type: 'textButton' },
      ]
    }
  ],
  preview: {
    select: {
      buttons: 'buttons',
    },
    prepare({ buttons }) {
      return {
        title: (buttons || []).map(button => button.text).join(', '),
        subtitle: 'Buttons List',
      }
    }
  }
}

// All the button types
export default [
  primaryButton,
  secondaryButton,
  textButton,
  buttonsList,
]
