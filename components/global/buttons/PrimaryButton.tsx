import UnstyledButton, { UnstyledButtonProps } from './UnstyledButton'

// Renders a background with a fill color
export default function PrimaryButton(
  props: UnstyledButtonProps
): React.ReactElement {
  return (
    <UnstyledButton {...props} className={`
      px-3.5 py-2.5

      text-sm
      font-semibold
      text-white
      no-underline

      rounded-md
      shadow-sm

      bg-indigo-500
      hover:bg-indigo-400

      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      focus-visible:outline-indigo-400

      ${props.className || ''}
    `} />
  )
}
