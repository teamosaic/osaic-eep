import createImageUrlBuilder from '@sanity/image-url'
import type { Image, ImageAsset, Reference } from 'sanity'

import { dataset, projectId } from '~/sanity/env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

interface OptionallyDereferencedImage extends Omit<SanityImage, 'asset'>{
  asset?: Reference | ImageAsset
}

export const urlForImage = (source: OptionallyDereferencedImage) => {

  // Ensure that source image contains a valid reference
  if (!(source?.asset?._ref || source?.asset?._id)) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}
