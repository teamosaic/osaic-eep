import { ArrowPathIcon } from '@heroicons/react/24/outline'
import React from "react";

import { ButtonIcon } from '~/types'

// Render button icons
export function Icon({ type, className }: { type: ButtonIcon, className?: string }): React.ReactElement {
  const standardClasses = 'h-8f w-8f inline-block text-primary'
  let classes = className || standardClasses
  switch (type) {

    case ButtonIcon.RightArrow:
      return <svg width="20" height="20" viewBox="0 0 35 28" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}>
        <path d="M34.5306 13.5C27.2256 13.5 21.3037 7.45584 21.3037 0" stroke="currentColor" strokeWidth="2.5" />
        <path d="M21.3033 27.002C21.3033 19.5461 27.2252 13.502 34.5303 13.502" stroke="currentColor" strokeWidth="2.5" />
        <path d="M31.8527 13.502L0.5 13.502" stroke="currentColor" strokeWidth="2.5" />
      </svg>

    case ButtonIcon.Loading:
      return <ArrowPathIcon
        className={`${classes} animate-spin`}
        aria-hidden />

  }
}
