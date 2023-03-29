import { definePreview } from 'next-sanity/preview'

import { dataset, projectId } from './env'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

export const usePreview = definePreview({
  projectId,
  dataset,

  // Todo: determine whether this is needed with token auth
  onPublicAccessOnly,
})
