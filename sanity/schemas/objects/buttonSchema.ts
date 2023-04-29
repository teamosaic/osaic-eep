import { RxButton } from 'react-icons/rx'
import { createListOptionsFromEnum } from '~/sanity/lib/schema'
import { ButtonType, ButtonIcon } from '~/types'
import startCase from 'lodash/startCase'

export const button = {
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'type',
      description: 'The style of the button.',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: createListOptionsFromEnum(ButtonType),
        layout: 'radio'
      }
    },
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
        list: createListOptionsFromEnum(ButtonIcon),
      }
    },
  ],
  preview: {
    select: {
      type: 'type',
      text: 'text',
    },
    prepare({ type, text }) {
      return {
        title: text,
        subtitle: `Button - ${startCase(type)}`,
      }
    }
  }
}

// Lists all the button options, for use in PortableText
export const buttonList = {
  name: 'buttonList',
  title: 'Button List',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'buttons',
      type: 'array',
      of: [
        { type: 'button' },
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
        subtitle: 'Button List',
      }
    }
  }
}
