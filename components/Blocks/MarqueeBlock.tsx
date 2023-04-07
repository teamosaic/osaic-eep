import type { PortableTextBlock } from '@portabletext/types'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImage, ImageAsset } from 'sanity'
import Image, { type ImageLoader } from 'next/image'

import BasicPortableText from '~/components/PortableText/BasicPortableText'
import { client } from '~/sanity/lib/client'
import type { SanityObject } from '~/types/sanityTypes'
import { urlForImage } from '~/sanity/lib/image'

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
      { background && <Image
        src={ urlForImage(background).url() }
        loader={ makeImageLoader(background) }
        fill
        priority
        placeholder='blur'
        blurDataURL={ background.asset.metadata.lqip }
        alt= { background.title || '' }
        className='object-cover' /> }

      {/* Body text */}
      <BasicPortableText value={ body } className='relative' />

    </div>
  )
}

function makeImageLoader(source: SanityImage): ImageLoader {
  return ({ width, quality}) => {
    return urlForImage(source).width(width).quality(quality).url()
  }
}
