import { groq } from 'next-sanity'

export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri]{
    ...,
    'uri': uri.current,
    blocks[] {
      ...,

      // De-reference image fields for acccessing image metadata
      _type == 'marqueeBlock' => {
        background { ..., asset-> }
      },
      _type == 'heroBlock' => {
        background { ..., asset-> }
      },

    }
  }[0]
`

// Get all towers
export const towerStaticPaths = groq`
  *[_type == 'tower' && defined(uri)]{
     'uri': uri.current,
  }
`
