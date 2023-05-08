import type { Image, ImageAsset } from 'sanity'

// Props for the main component
export interface SanityImageProps {
  source: SanityImageSource
  expand?: boolean
  aspect?: number //  An explict aspect ratio
  width?: number
  height?: number
  priority?: boolean  // Forwarded to next/image
  sizes: string // Forwarded to next/image
  fit?: ObjectFit
  className?: string
}

// Should accept normal Sanity images or already dereferenced instances
export type SanityImageSource = ReferentialImage | DereferencedImage

// Add alt fields to a normal Sanity field
export type ReferentialImage = Image & AltFields

// An image that's been dereferenced so we can read metafield data with groq
// like: `image { ..., asset-> }`
export type DereferencedImage =
  Pick<Image, 'key' | 'crop' | 'hotspot'> & // Omit of `asset` never worked
  AltFields &
  { asset?: ImageAsset }

// Conventional places to find alt text
type AltFields = {
  alt?: string
  title?: string
  caption?: string
}

export enum ObjectFit {
  Cover = 'cover',
  Contain = 'contain',
}

// Fixed image size uses Sanity image CDN fit rules
// https://www.sanity.io/docs/image-urls#fit-45b29dc6f09f
export interface FixedSizeImageProps extends Pick<SanityImageProps,
  'source' | 'priority' | 'className'
> {
  width: number
  height: number
  fit?: ObjectFit
}

// Exapnding image props uses CSS object fit rules
export interface ExpandingImageProps extends Pick<SanityImageProps,
  'source' | 'priority' | 'sizes' | 'className'
> {
  fit?: ObjectFit
}

// Fixed image size uses Sanity image CDN fit rules
// https://www.sanity.io/docs/image-urls#fit-45b29dc6f09f
export interface AspectRespectingImageProps extends Pick<SanityImageProps,
  'source' | 'priority' | 'sizes' | 'className'
> {
  aspect: number,
}
