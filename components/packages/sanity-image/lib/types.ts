import type {
  Image as SanityImage,
  Reference,
  ImageAsset,
} from 'sanity'

// Props for the main component
export interface SanityImageProps {
  source: OptionallyDereferencedImage,
  expand?: boolean,
  width?: number,
  height?: number,
  priority?: boolean,
  fit?: ObjectFit,
  className?: string,
}

export enum ObjectFit {
  Cover = 'cover',
  Contain = 'contain',
}

// A Sanity image object that may or may not be dereferenced
export interface OptionallyDereferencedImage
  extends Omit<SanityImage, 'asset'> {
    asset?: Reference | ImageAsset
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
  'source' | 'priority' | 'className'
> {
  fit?: ObjectFit
}

// Fixed image size uses Sanity image CDN fit rules
// https://www.sanity.io/docs/image-urls#fit-45b29dc6f09f
export interface AspectRespectingImageProps extends Pick<SanityImageProps,
  'source' | 'priority' | 'className'
> { }
