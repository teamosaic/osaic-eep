import { RxButton } from 'react-icons/rx'

export const filledButton = {
  name: 'filledButton',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'text',
      desciption: 'The text displayed within the button',
      type: 'string',
    }
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({ text }) {
      return {
        title: text,
        subtitle: 'Filled Button',
      }
    }
  }
}

export const textButton = {
  name: 'textButton',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'text',
      desciption: 'The text displayed within the button',
      type: 'string',
    }
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({ text }) {
      return {
        title: text,
        subtitle: 'Text Button',
      }
    }
  }
}

export const buttonsList = {
  name: 'buttonsList',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'buttons',
      type: 'array',
      of: [
        { type: 'filledButton' },
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
  filledButton,
  textButton,
  buttonsList,
]
