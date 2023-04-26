import { SanityObject } from './sanityTypes'
import { Slottable, Styleable } from './componentTypes'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
}

export enum ButtonIcon {
  RightArrow = 'right-arrow',
}

// Props needed to render a button, generically
export interface Button extends SanityObject {
  text?: string
  url?: string
  icon?: ButtonIcon
}

// Props needed to render a Button *component*
export type ButtonComponent = Button & Slottable & Styleable
