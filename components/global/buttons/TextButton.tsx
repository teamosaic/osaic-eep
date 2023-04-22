import UnstyledButton, { UnstyledButtonProps } from './UnstyledButton'

// Renders a basic link
export default function TextButton(
  props: UnstyledButtonProps
): React.ReactElement {
  return (
    <UnstyledButton {...props} className={`
        text-sm font-semibold leading-6 text-white no-underline
        ${props.className || ''}
    `} />
  )
}
