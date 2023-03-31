import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityObject } from '~/types/sanity'

export interface MarqueeBlock extends SanityObject {
  body: PortableTextBlock
}

export default function MarqueeBlock({ block }: {
  block: MarqueeBlock
}): React.ReactElement {
  return (

    // Container
    <div className='
      max-w-screen-md mx-auto px-8
      py-8 bg-sky-800/10
      '>

      {/* Body text */}
      <div className='prose text-inherit'>
        <PortableText value={ block.body }/>
      </div>

    </div>
  )
}
