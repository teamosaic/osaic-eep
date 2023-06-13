import { type PortableTextComponents, PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import SmartLink from '../smart-link/SmartLink'
import merge from 'lodash/merge'

// Renders a Sanity PortableText component with standard customizations
export default function BasePortableText({
  value, components, className = ''
}: {
  value: PortableTextBlock[]
  components?: PortableTextComponents
  className?: string
}): React.ReactElement {

  // Require content
  if (!value) return

  // Merge passed in components configuration
  components = merge({}, baseComponents, components)

  // Render Tailwind prose wrapper but clear the default prose styles
  // with `text-inherit` and the configuration in tailwind.config.js.
  // Also, make the weight of h1s lighter and bigger
  return (
    <div className={`
      prose prose-base ${className}`}>
      <PortableText {...{ value, components }} />
    </div>
  )
}

// Override some PortableText default components
const baseComponents: PortableTextComponents = {

  marks: {

    // Render links through SmartLink
    link: ({ value, children }) => {
      return <SmartLink href={value.href}>{ children }</SmartLink>
    },

  },
}
