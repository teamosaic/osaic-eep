import SmartLink from '~/packages/smart-link/SmartLink'

// Render differnet root elements depending on passed in props
export default function BaseButton({
  text,
  url,
  children,
  className
}: BaseButtonProps): React.ReactElement {

  // Support the text content on either text or children props
  const contents = text || children

  // If no contents, render nothing
  if (!contents) return

  // If a url was provided, render a smart link
  if (url) {
    return (
      <SmartLink
        {...{ className }}
        href={ url }
      >
        { contents }
      </SmartLink>)
  }

  // Fallback to a span
  return <span {...{ className }}>{ contents }</span>
}

// Types for the component props
export type BaseButtonProps = {
  text?: string,
  url?: string
  children?: React.ReactNode,
  className?: string,
}
