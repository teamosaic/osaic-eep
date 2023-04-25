import SmartLink from '~/packages/smart-link/SmartLink'
import { ButtonComponent, ButtonIcon } from '~/types'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

// Render differnet root elements depending on passed in props
export default function UnstyledButton({
  text,
  url,
  icon,
  children,
  className = '',
}: ButtonComponent): React.ReactElement {

  // Support the text content on either text or children props
  let contents = text || children

  // If no contents, render nothing
  if (!contents) return

  // Add the icon after the text contentts
  if (icon) contents = <>{ contents }<Icon type={ icon } /></>

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

// Render button icons
export function Icon({ type }: { type: ButtonIcon}): React.ReactElement {
  const standardClasses = 'h-5f w-5f inline-block ml-[0.5em]'
  switch(type) {
    case ButtonIcon.RightArrow:
      return <ArrowRightIcon className={ standardClasses } aria-hidden='true' />
  }
}
