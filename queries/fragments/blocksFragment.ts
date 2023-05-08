import { groq } from 'next-sanity'
import { articleCardFragment } from './articleCardFragment'

export const blocksFragment = groq`
  ...,

  // De-reference image fields for acccessing image metadata
  _type == 'heroBlock' => {
    background { ..., asset-> }
  },

  // Fetch recent articles
  _type == 'articlesBlock' => {
    'recentArticles': *[_type == 'article'] | order(date desc) [0...3]  {
      ${ articleCardFragment },
    },
    'totalArticles': count(*[_type == "article"]),
  }
`
