import Image from 'next/image'
import { urlForImage, makeImageLoader } from './lib/urlBuilding'
import {
  AspectRespectingImageProps,
  ExpandingImageProps,
  FixedSizeImageProps,
  ObjectFit,
  SanityImageProps,
} from './lib/types'
import {
  altTextFromSource,
  aspectRatioFromSource,
  objectPositionFromSource,
  placeholderFromSource,
} from './lib/sourceMapping'

// Render a Sanity image via Next/Image
export default function SanityImage({
  source, expand, aspect, width, height, priority, sizes, fit, className = '',
}: SanityImageProps): React.ReactElement | null {

  // Return without error if no source
  if (!source?.asset) return null

  // If no aspect ratio was defined, look for it in the source
  if (!aspect) aspect = aspectRatioFromSource(source)

  // If the image was not de-referenced and we're not expanding it, then
  // next/image requires a width and height, so throw an error
  if (!expand && !aspect && (!width || !height)) {
    throw `If not using the \`expand\` prop, you need to either set an explicit
      width and height (next/image requires this) or dereference the asset with
      code like \`image { ..., asset-> }\` so we can read the aspect ratio from
      the metadata.`
  }

  // Render fixed size image because a width and height were supplied
  if (width && height) {
    return <FixedSizeImage {...{
      source, width, height, priority, fit, className
    }} />
  }

  // Render an expanding image
  if (expand) {
    return <ExpandingImage {...{ source, priority, sizes, fit, className }} />
  }

  // Return an image that preserves the expact ratio
  if (aspect) {
    return <AspectRespectingImage {...{
      source, aspect, priority, sizes, className
    }} />
  }
}

// Make an image at a specific size, using the Sanity CDN to generate sizes
function FixedSizeImage({
  source, width, height, priority, fit, className = ''
}: FixedSizeImageProps): React.ReactElement {
  return (
    <Image
      src={ urlForImage(source, { width, height, fit }).url() }
      width={ width }
      height={ height }
      priority={ priority }
      alt={ altTextFromSource(source) }
      className={ className }
      { ...placeholderFromSource(source) }
    />
  )
}

// Render an image that expands to fill it's container
function ExpandingImage({
  source, priority, sizes, fit = ObjectFit.Cover, className = ''
}: ExpandingImageProps): React.ReactElement {
  return (
    <Image
      src={ urlForImage(source).url() }
      loader={ makeImageLoader(source) }
      fill
      sizes={ sizes }
      priority={ priority }
      alt={ altTextFromSource(source) }
      className={ className }
      style={{
        objectFit: fit,
        objectPosition: objectPositionFromSource(source),
      }}
      { ...placeholderFromSource(source) }
    />
  )
}

// Render wrapper element who is used to set the aspect ratio, when
// not expanding.
function AspectRespectingImage({
  source, aspect, priority, sizes, className = ''
}: AspectRespectingImageProps): React.ReactElement {
  return (
    <div
      className={ className }
      style={{
        position: 'relative',
        aspectRatio: aspect,
      }}>
      <ExpandingImage {...{ source, priority, sizes, className }} />
    </div>
  )
}

