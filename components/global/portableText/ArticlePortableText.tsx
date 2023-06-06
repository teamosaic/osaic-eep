import { type PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import BasePortableText from '~/packages/portable-text/BasePortableText'

// A PortableText instance for use in large article views
export default function ArticlePortableText({ value, className = '' }: {
  value: PortableTextBlock[]
  className?: string
}): React.ReactElement {
  return (
    <BasePortableText
      className={`prose-article ${className}`}
      { ...{ value, components} }
    />
  )
}

// Define components that can be rendered in this block
const components: PortableTextComponents = {
}
