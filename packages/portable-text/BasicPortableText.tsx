import { type PortableTextComponents,PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import SmartLink from '../smart-link/SmartLink'

// Renders a Sanity PortableText component with standard customizaionts
export default function BasicPortableText({ value, className = '' }: {
  value: PortableTextBlock
  className?: string
}): React.ReactElement {

  // Require content
  if (!value) return

  // Render Tailwind prose wrapper but clear the default prose styles
  // with `text-inherit` and the configuration in tailwind.config.js.
  // Also, make the weight of h1s lighter and bigger
  return (
    <div className={`
      prose prose-basic ${className}`}>
      <PortableText {...{ value, components }} />
    </div>
  )
}

// Override some PortableText default components
const components: PortableTextComponents = {
  marks: {

    // Render links through SmartLInk
    link: ({ value, children }) => {
      return <SmartLink href={value.href}>{ children }</SmartLink>
    },

  },
}
