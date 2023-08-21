import { groq } from 'next-sanity'

import { imageField } from './fields/assetFields'

export const getArticle = groq`
  *[_type == 'article' && uri.current == $uri]{
    ...,
    'uri': uri.current,
    'date': coalesce(date, _createdAt),
    ${ imageField },
  }[0]
`

// Build just recent articles
export const articleStaticPaths = groq`
  *[_type == 'article' && defined(uri)] [0...3] | order(date desc) {
    'uri': uri.current
  }
`
