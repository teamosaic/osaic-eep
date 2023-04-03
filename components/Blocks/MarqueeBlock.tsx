import { client } from '~/sanity/lib/client'
import BasicPortableText from '~/components/PortableText/BasicPortableText'
import Image, { type ImageLoader } from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityObject } from '~/types/sanity'

const imgBuilder = imageUrlBuilder(client)

export interface MarqueeBlock extends SanityObject {
  body: PortableTextBlock
  background: SanityImageObject & {
    title: string
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
        src={ imgBuilder.image(background).url() }
        loader={ makeImageLoader(background) }
        fill
        priority
        alt= { background.title || '' }
        className='object-cover' /> }


      {/* Body text */}
      <BasicPortableText value={ body } className='relative' />

    </div>
  )
}

function makeImageLoader(source: SanityImageObject): ImageLoader {
  return ({ width, quality}) => {
    return imgBuilder.image(source).width(width).quality(quality).url()
  }
}
