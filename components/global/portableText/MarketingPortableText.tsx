import { type PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

import ButtonList from '~/components/global/buttons/ButtonList'
import BasePortableText from '~/packages/portable-text/BasePortableText'

// A PortableText instance for use in marketing blocks like a hero Block
export default function MarketingPortableText({ value, className = '' }: {
  value: PortableTextBlock[]
  className?: string
}): React.ReactElement {
  const components = makeComponents()
  return (
    <BasePortableText
      className={`prose-marketing ${className}`}
      { ...{ value, components} }
    />
  )
}

// Define components that can be rendered in this block
function makeComponents(): PortableTextComponents {
  return {
    types: {

      // Render a row of buttons, adding some extra margins to it
      buttonList: ({ value }) => (
        <div className='mt-sm'>
          <ButtonList {...value} />
        </div>
      ),
    }
  }
}
