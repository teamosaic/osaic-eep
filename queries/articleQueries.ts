import { groq } from 'next-sanity'

export const getArticle = groq`
  *[_type == 'article' && uri.current == $uri]{
    ...,
    'uri': uri.current,
  }[0]
`

// Build just recent articles
export const articleStaticPaths = groq`
  *[_type == 'article' && defined(uri)] [0...3] | order(date desc) {
    'uri': uri.current
  }
`
