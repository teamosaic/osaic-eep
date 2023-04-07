import { groq } from 'next-sanity'

export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri]{
    ...,
    'uri': uri.current
  }[0]
`

// Get all towers
export const towerStaticPaths = groq`
  *[_type == 'tower' && defined(uri)]{
     'uri': uri.current
  }
`
