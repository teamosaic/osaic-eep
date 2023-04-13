import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import SanityImage from '~/packages/sanity-image/SanityImage'
import clsx from 'clsx'
import type { MarqueeBlock as BlockType } from '~/types/blocks'
import InViewTrigger from '~/packages/in-view-trigger/InViewTrigger'

export default function MarqueeBlock({ block }: {
  block: BlockType
}): React.ReactElement {
  const { body, background } = block

  return (

    // Container
    <InViewTrigger animations className={clsx([
      { 'relative': !!background }, // Constrain background image to this block
      { 'py-lg': !!background }, // Add padding if there is a background image
    ])}>

      {/* Background image */}
      { background && <SanityImage
        expand
        priority
        sizes='100vw'
        source={ background } /> }

      {/* Body text */}
      <BasicPortableText
        value={ body }
        className='
          max-w-screen-lg mx-auto px-gutter
          prose-fade-up
          relative' />

    </InViewTrigger>
  )
}
