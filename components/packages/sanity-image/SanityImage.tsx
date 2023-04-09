import {
  SanityImageProps,
  ObjectFit,
  FixedSizeImageProps,
  ExpandingImageProps
} from './lib/types'
import clsx from 'clsx'
import Image from 'next/image'
import { urlForImage, makeImageLoader } from './lib/url-building'

// Render a Sanity image via Next/Image
export default function SanityImage({
  source, expand, width, height, priority, fit, className,
}: SanityImageProps): React.ReactElement | null {

  // Return withouth error if no source
  if (!source) return null

  // Destructure variables
  const aspectRatio = source.asset?.metadata?.dimensions?.aspectRatio,
    blurDataUrl = source.asset?.metadata?.lqip

  // If the image was not de-reference and we're not expanding it, then
  // next/image requires a width and height, so throw an error
  if (!expand && !aspectRatio && (!width || !height)) {
    throw `If not using the \`expand\` prop, you need to either set an explicit
      width and height (next/image requires this) or dereference the asset with
      code like \`image { ..., asset-> }\` so we can read the aspect ratio from
      the metadata.`
  }

  // Render fixed size image
  if (width && height) {
    return <FixedSizeImage {...{
      source, width, height, priority, blurDataUrl, fit, className
    }} />
  }

  // Render an expadning image
  if (expand) {
    return <ExpandingImage {...{
      source, priority, blurDataUrl, fit, className
    }} />
  }

  return (
    <AspectRespectingImage {...{ className, expand }}>

    </AspectRespectingImage>
  )
}

// Make an image at a specific size, using the Sanity CDN to generate sizes
function FixedSizeImage({
  source, width, height, priority, blurDataUrl, fit, className
}: FixedSizeImageProps): React.ReactElement {
  return (
    <Image
      src={ urlForImage(source).width(width).height(height).fit(fit).url() }
      width={ width }
      height={ height }
      priority={ priority }
      placeholder={ blurDataUrl ? 'blur' : null }
      blurDataURL={ blurDataUrl }
      alt={ '' }
      className={ className }
    />
  )
}

// Render an image that expands to fill it's container
function ExpandingImage({
  source, priority, blurDataUrl, fit = ObjectFit.Cover, className
}: ExpandingImageProps): React.ReactElement {
  return (
    <Image
      src={ urlForImage(source).url() }
      loader={ makeImageLoader(source) }
      fill
      priority={ priority }
      placeholder={ blurDataUrl ? 'blur' : null }
      blurDataURL={ blurDataUrl }
      alt= { '' }
      className={ className }
      style={{
        objectFit: fit,
      }} />
  )
}

// Render wrapper element who is used to set the aspect ratio, when
// not expanding.
function AspectRespectingImage({ className, expand, children }): React.ReactElement {
  return (
    <div className={ clsx([
      className,
      expand ? 'si-expand' : 'si-relative',
    ])}>
      { children }
    </div>
  )
}

