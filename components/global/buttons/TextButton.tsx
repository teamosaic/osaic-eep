import BaseButton, { BaseButtonProps } from './BaseButton'

// Renders a basic link
export default function TextButton(
  props: BaseButtonProps
): React.ReactElement {
  return (
    <BaseButton {...props} className={`
        text-sm font-semibold leading-6 text-white no-underline
        ${props.className || ''}
    `} />
  )
}
