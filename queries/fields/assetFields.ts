import { groq } from 'next-sanity'

// Helper to dereference asset fields
export const assetField = name => groq`
  ${name} { ..., asset-> }
`

// Shorthands for common asset fields
export const imageField = assetField('image')
export const videoField = assetField('video')

// Helper for derefencing visual fields
export const visualField = name => groq`
  ${name} {
    ...,
    ${ imageField },
    ${ videoField },
  }
`
