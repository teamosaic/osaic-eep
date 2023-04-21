import BaseButton, { BaseButtonProps } from './BaseButton'

// Renders a basic link
export default function TextButton({
  text,
  url,
  children,
  className,
}: BaseButtonProps): React.ReactElement {
  return (
    <BaseButton
      {...{ url, text, children }}
      className={`
        text-sm font-semibold leading-6 text-white no-underline
        ${className}
      `}
    />
  )
}
