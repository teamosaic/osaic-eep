import { client } from '~/sanity/lib/client'
import BasicPortableText from '~/components/packages/portable-text/BasicPortableText'
import imageUrlBuilder from '@sanity/image-url'
import SanityNextImage from '~/components/packages/sanity-image/SanityImage'
import type { Image as SanityImage, ImageAsset } from 'sanity'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityObject } from '~/types/sanityTypes'

const imgBuilder = imageUrlBuilder(client)

export interface MarqueeBlock extends SanityObject {
  body: PortableTextBlock
  background?: SanityImage & {
    title: string
    asset: ImageAsset
  }
}

export default function MarqueeBlock({ block }: {
  block: MarqueeBlock
}): React.ReactElement {
  const { body, background } = block

  return (

    // Container
    <div className='
      max-w-screen-md mx-auto px-8
      py-8 bg-sky-800/10
      relative'>

      {/* Background image */}
      { background && <SanityNextImage
        expand
        priority
        source={ background } /> }

      {/* Body text */}
      <BasicPortableText value={ body } className='relative' />

    </div>
  )
}
