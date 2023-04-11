import BasicPortableText from '~/components/packages/portable-text/BasicPortableText'
import SanityNextImage from '~/components/packages/sanity-image/SanityImage'
import clsx from 'clsx'
import type { MarqueeBlock as BlockType } from '~/types/blocks'

export default function MarqueeBlock({ block }: {
  block: BlockType
}): React.ReactElement {
  const { body, background } = block

  return (

    // Container
    <div className={clsx([
      { 'relative': !!background }, // Align background image
      { 'py-md': !!background }, // Add padding if there is a background image
    ])}>

      {/* Background image */}
      { background && <SanityNextImage
        expand
        priority
        sizes='100vw'
        source={ background } /> }

      {/* Body text */}
      <BasicPortableText
        value={ body }
        className='max-w-screen-md mx-auto px-8 relative' />

    </div>
  )
}
