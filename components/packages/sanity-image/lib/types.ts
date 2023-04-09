import type {
  Image as SanityImage,
  Reference,
  ImageAsset,
  ImageUrlFitMode
} from 'sanity'

// Props for the main component
export interface SanityImageProps {
  source: OptionallyDereferencedImage,
  expand?: boolean,
  width?: number,
  height?: number,
  priority?: boolean,
  fit?: ObjectFit | ImageUrlFitMode,
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
  blurDataUrl?: string
  fit?: ImageUrlFitMode
}

// Exapnding image props uses CSS object fit rules
export interface ExpandingImageProps extends Pick<SanityImageProps,
  'source' | 'priority' | 'className'
> {
  blurDataUrl?: string
  fit?: ObjectFit
}
