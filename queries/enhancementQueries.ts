import { groq } from 'next-sanity'

import { blocksFragment } from './fragments/blocksFragment'

export const getEnhancement = groq`
  *[_type == 'enhancementCategory' && uri.current == $uri]{
    ...,
    'uri': uri.current,
    blocks[] { ${blocksFragment} }
  }[0]
`
// Get all enhancements
export const enhancementStaticPaths = groq`
  *[_type == 'enhancementCategory' && defined(uri)]{
      _type,
     'uri': uri.current,
  }
`
// query to get all enhancements on the home page and in the nav
export const getEnhancements = groq`
  *[_type == 'enhancementCategory']{
    ...,
  } | order(orderRank asc)
`

export const getNextEnhancement = groq`
  *[_type == "enhancementCategory" && orderRank > $currentOrderRank] | order(orderRank asc)[0] {
    ...,
  }
`
