import { groq } from 'next-sanity'

export const getSettings = groq`
  *[_type == 'settings'][0]
`
