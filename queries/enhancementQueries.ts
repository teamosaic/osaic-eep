import { groq } from 'next-sanity'

export const getEnhancements = groq`
  *[_type == 'tower']{
    ...,
  }
`
