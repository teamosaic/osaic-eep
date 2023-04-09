import { OptionallyDereferencedImage } from './types'
import createImageUrlBuilder from '@sanity/image-url'
import type { ImageLoader } from 'next/image'
import type { ImageUrlFitMode } from 'sanity'


// Make an image builder instance from ENVs
const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

// Add common conventions when building URLs to images
export function urlForImage(source: OptionallyDereferencedImage) {
  return imageBuilder?.image(source).auto('format').fit('max')
}

// Make a next/image url loader
export function makeImageLoader(
  source: OptionallyDereferencedImage
): ImageLoader {
  return ({ width, quality}) => {
    return urlForImage(source).width(width).quality(quality).url()
  }
}
