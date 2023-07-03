import { createClient } from 'next-sanity'
import { SanityClient } from 'sanity'

import { apiVersion, dataset, projectId, useCdn } from './env'

// This is based on
// https://github.com/sanity-io/next-sanity/blob/main/app/sanity.client.ts

// Make a client instances for doing fetching data
export const client = makeClient()

// Make a new SanityClient
export function makeClient(): SanityClient {
  return createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    perspective: 'published'
  })
}

// Make a client with a preview token
export function makePreviewClient(previewToken: string): SanityClient {
  return makeClient().withConfig({
    token: previewToken,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    perspective: 'previewDrafts',
  })
}
