import UnstyledButton from './UnstyledButton'
import { ButtonComponent } from '~/types'

// Renders a background with a white background color
export default function SecondaryButton(
  props: ButtonComponent
): React.ReactElement {
  return (
    <UnstyledButton {...props} className={`
      px-3.5 py-2.5

      text-sm
      font-semibold
      text-gray-900
      no-underline

      rounded-md
      shadow-sm

      bg-white
      hover:bg-gray-50

      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      focus-visible:outline-indigo-400

      ${props.className || ''}
    `} />
  )
}
