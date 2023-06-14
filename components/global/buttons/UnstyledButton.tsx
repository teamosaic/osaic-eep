import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

import SmartLink from '~/packages/smart-link/SmartLink'
import { ButtonComponent, ButtonIcon } from '~/types'

// Render differnet root elements depending on passed in props
export default function UnstyledButton({
  text,
  url,
  loading,
  icon,
  children,
  onClick,
  className = '',
}: ButtonComponent): React.ReactElement {

  // Support the text content on either text or children props
  let contents = text || children

  // If no contents, render nothing
  if (!contents) return

  // Add the icon after the text content
  if (loading) icon = ButtonIcon.Loading
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

  // If an onClick was provided, render as a button element
  if (onClick) {
    return <button {...{ onClick, className }}>{ contents }</button>
  }

  // Fallback to a span
  return <span {...{ className }}>{ contents }</span>
}

// Render button icons
export function Icon({ type }: { type: ButtonIcon}): React.ReactElement {
  const standardClasses = 'h-5f w-5f inline-block ml-[0.5em]'
  switch(type) {

    case ButtonIcon.RightArrow:
      return <ArrowRightIcon
        className={ standardClasses }
        aria-hidden />

    case ButtonIcon.Loading:
      return <ArrowPathIcon
        className={ `${standardClasses } animate-spin`}
        aria-hidden />
  }
}
