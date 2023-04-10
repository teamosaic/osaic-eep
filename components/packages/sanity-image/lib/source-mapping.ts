import { SanityImageSource, DereferencedImage } from './types'

// Return a dereferenced image type or null
export function getDereferencedImage(
  source: SanityImageSource
):DereferencedImage {
  if (source.asset._type == 'reference') return
  return source as DereferencedImage
}

// Build the alt text from common places it may exist
export function altTextFromSource(
  source: SanityImageSource
): string {
  return source.alt || source.title || source.caption || ''
}

// Figure out the aspect ratio from the source
export function aspectRatioFromSource(
  source: SanityImageSource
): number | null {
  if (!(source = getDereferencedImage(source))) return
  return source.asset.metadata?.dimensions?.aspectRatio
}

// Make object-position values from the hotspot data
export function objectPositionFromSource(
  source: SanityImageSource
): string | null {
  if (!source.hotspot) return
  const left = source.hotspot.x - source.crop.left + source.crop.right,
    top =  source.hotspot.y - source.crop.top + source.crop.bottom
  return `${left * 100}% ${(top) * 100}%`
}

// Use lqip to make placeholder props
export function placeholderFromSource(source: SanityImageSource): {
  placeholder: 'blur' | null
  blurDataURL: string
} | null {
  if (!(source = getDereferencedImage(source))) return
  const blurDataURL = source.asset?.metadata?.lqip
  if (!blurDataURL) return
  return {
    placeholder: 'blur',
    blurDataURL,
  }
}
