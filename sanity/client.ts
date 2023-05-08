import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './env'

// Make a client instances for doing fetching data
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
