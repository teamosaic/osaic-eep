import Image from 'next/image'
import { urlForImage, makeImageLoader } from './lib/url-building'
import {
  AspectRespectingImageProps,
  ExpandingImageProps,
  FixedSizeImageProps,
  ObjectFit,
  SanityImageProps,
} from './lib/types'
import {
  altTextFromSource,
  objectPositionFromSource,
  placeholderFromSource,
} from './lib/source-mapping'

// Render a Sanity image via Next/Image
export default function SanityImage({
  source, expand, width, height, priority, fit, className,
}: SanityImageProps): React.ReactElement | null {

  // Return withouth error if no source
  if (!source) return null

  // If the image was not de-reference and we're not expanding it, then
  // next/image requires a width and height, so throw an error
  const hasAspectRatio = !!source.asset?.metadata?.dimensions?.aspectRatio
  if (!expand && !hasAspectRatio && (!width || !height)) {
    throw `If not using the \`expand\` prop, you need to either set an explicit
      width and height (next/image requires this) or dereference the asset with
      code like \`image { ..., asset-> }\` so we can read the aspect ratio from
      the metadata.`
  }

  // Render fixed size image
  if (width && height) {
    return <FixedSizeImage {...{
      source, width, height, priority, fit, className
    }} />
  }

  // Render an expanding image
  if (expand) {
    return <ExpandingImage {...{ source, priority, fit, className }} />
  }

  // Else, return an image that preserves the expact ratio
  return (
    <AspectRespectingImage {...{ source, className, priority, expand }} />
  )
}

// Make an image at a specific size, using the Sanity CDN to generate sizes
function FixedSizeImage({
  source, width, height, priority, fit, className
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
  source, priority, fit = ObjectFit.Cover, className
}: ExpandingImageProps): React.ReactElement {
  return (
    <Image
      src={ urlForImage(source).url() }
      loader={ makeImageLoader(source) }
      fill
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
  source, priority, className
}: AspectRespectingImageProps): React.ReactElement {
  const { aspectRatio } = source.asset.metadata.dimensions
  return (
    <div
      className={ className }
      style={{ position: 'relative',
        aspectRatio,
      }}>
      <ExpandingImage {...{ source, priority, className }} />
    </div>
  )
}

