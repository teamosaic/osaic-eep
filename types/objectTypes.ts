import { Slottable, Styleable } from './componentTypes'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
}

export enum ButtonIcon {
  RightArrow = 'right-arrow',
  Loading = 'loading'
}

// Props needed to render a button, generically
export interface Button {
  text?: string
  url?: string
  loading?: boolean
  icon?: ButtonIcon
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// Props needed to render a Button *component*
export type ButtonComponent = Button & Slottable & Styleable
