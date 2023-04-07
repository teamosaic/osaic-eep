import createImageUrlBuilder from '@sanity/image-url'
import type { Image, ImageAsset, Reference } from 'sanity'

import { dataset, projectId } from '~/sanity/env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

type OptionallyDeReferencedImage = Image & {
  asset?: (Reference | ImageAsset) & {
    _id?: string // I thought this would inheirt from ImageAsset?
  }
}

export const urlForImage = (source: OptionallyDeReferencedImage) => {

  // Ensure that source image contains a valid reference
  if (!(source?.asset?._ref || source?.asset?._id)) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}
