import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import SanityImage from '~/packages/sanity-image/SanityImage'
import clsx from 'clsx'
import type { MarqueeBlock as BlockType } from '~/types/blocks'
import AnimateInView from '~/packages/animate-in-view'

export default function MarqueeBlock({ block }: {
  block: BlockType
}): React.ReactElement {
  const { body, background } = block

  return (

    // Container
    <div className={clsx([
      !!background && 'relative py-lg overflow-hidden'
    ])}>

      {/* Background image */}
      { background &&
        <AnimateInView className='animate-slow-scale-down-in absolute inset-0'>
          <SanityImage
            expand
            priority
            sizes='100vw'
            source={ background } />
        </AnimateInView> }

      {/* Body text */}
      <AnimateInView
        target='descendants'
        when='10%'
        className='prose-slide-up-in relative'>
        <BasicPortableText
          value={ body }
          className='max-w-screen-lg mx-auto px-gutter' />
      </AnimateInView>

    </div>
  )
}
