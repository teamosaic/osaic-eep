import { groq } from 'next-sanity'
import { blocksFragment } from './fragments/blocksFragment'

export const getArticlesIndex = groq`
  *[_type == 'articlesIndex']{
    ...,
    headerBlocks[] { ${blocksFragment} }
    footerBlocks[] { ${blocksFragment} }
  }[0]
`

export const articlesIndexStaticPaths = groq`
  *[_type == 'articlesIndex']{
     'uri': uri.current,
  }
`
