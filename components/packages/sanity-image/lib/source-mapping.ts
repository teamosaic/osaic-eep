import { OptionallyDereferencedImage } from './types'

// Build the alt text from common places it may exist
export function altTextFromSource(
  source: OptionallyDereferencedImage
): string {
  return source.title || source.alt || source.caption || ''
}

// Make object-position values from the hotspot data
export function objectPositionFromSource(
  source: OptionallyDereferencedImage
): string | null {
  if (!source.hotspot) return
  const { x, y } = source.hotspot
  return `${x * 100}% ${y * 100}%`
}

// Use lqip to make placeholder props
export function placeholderFromSource(source: OptionallyDereferencedImage): {
  placeholder: string
  blurDataURL: string
} | null {
  const blurDataURL = source.asset?.metadata?.lqip
  if (!blurDataURL) return
  return {
    placeholder: 'blur',
    blurDataURL,
  }
}

