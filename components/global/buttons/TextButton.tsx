import { ButtonComponent } from '~/types'

import UnstyledButton from './UnstyledButton'

// Renders a basic link
export default function TextButton(
  props: ButtonComponent
): React.ReactElement {
  return (
    <UnstyledButton {...props} className={`
        text-sm font-semibold leading-6 no-underline whitespace-nowrap
        ${props.className || ''}
    `} />
  )
}
