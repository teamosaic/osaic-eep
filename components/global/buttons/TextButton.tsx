import UnstyledButton from './UnstyledButton'
import { ButtonComponent } from '~/types'

// Renders a basic link
export default function TextButton(
  props: ButtonComponent
): React.ReactElement {
  return (
    <UnstyledButton {...props} className={`
        text-sm font-semibold leading-6 text-white no-underline
        ${props.className || ''}
    `} />
  )
}
