import { groq } from 'next-sanity'

export const getArticlesIndex = groq`
  *[_type == 'articlesIndex']{
    ...,
  }[0]
`

export const articlesIndexStaticPaths = groq`
  *[_type == 'articlesIndex']{
     'uri': uri.current,
  }
`
