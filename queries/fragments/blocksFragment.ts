import { groq } from 'next-sanity'

export const blocksFragment = groq`
  ...,

  // De-reference image fields for acccessing image metadata
  _type == 'heroBlock' => {
    background { ..., asset-> }
  },

  // Fetch recent articles
  _type == 'articlesBlock' => {
    'recentArticles': *[_type == 'article'] | order(date desc) [0...3]  {
      ...,
      'uri': uri.current,
      'date': coalesce(date, _createdAt),
      'body': undefined, // Don't fetch the whole body
      image { ..., asset-> },
      'excerpt':
        array::join(string::split((pt::text(body)), '')[0...256], ''),

    }
  },
`
