import { type PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

import ButtonList from '~/components/global/buttons/ButtonList'
import BasePortableText from '~/packages/portable-text/BasePortableText'

// A PortableText instance for use in marketing blocks like a hero Block
export default function MarketingPortableText({ value, className = '', alignmentClasses = '' }: {
  value: PortableTextBlock[]
  className?: string
  alignmentClasses?: string
}): React.ReactElement {
  return (
    <BasePortableText
      className={`prose-marketing ${className}`}
      { ...{ value, components} }
    />
  )
}

// Define components that can be rendered in this block
const components: PortableTextComponents = {

  types: {

    // Render a row of buttons, adding some extra margins to it
    buttonList: ({ value, alignmentClasses }) => <ButtonList {...value} className={`mt-sm ${alignmentClasses}`} />,

  },
}
