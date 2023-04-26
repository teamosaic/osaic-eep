import { groq } from 'next-sanity'

export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri]{
    ...,
    'uri': uri.current,
    blocks[] {
      ...,

      // De-reference image fields for acccessing image metadata
      _type == 'heroBlock' => {
        background { ..., asset-> }
      },

      // Fetch recent articles
      _type == 'articlesBlock' => {
        'recentArticles': *[_type == 'article'] [0...3] | order(date desc) {
          ...,
          'uri': uri.current,
          'date': dateTime(date),
          'body': undefined, // Don't fetch the whole body
          'excerpt':
            array::join(string::split((pt::text(body)), '')[0...256], ''),

        }
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
