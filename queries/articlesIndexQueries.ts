import { groq } from 'next-sanity'
import { blocksFragment } from './fragments/blocksFragment'
import { articleCardFragment } from './fragments/articleCardFragment'

export const getArticlesIndex = groq`
  *[_type == 'articlesIndex']{
    ...,

    // Get the blocks
    headerBlocks[] { ${ blocksFragment } },
    footerBlocks[] { ${ blocksFragment } },

    // Get the initial page of articles
    'articles': *[_type == 'article'] | order(date desc) [0...12]  {
      ${ articleCardFragment }
    },
  }[0]
`

export const articlesIndexStaticPaths = groq`
  *[_type == 'articlesIndex']{
     'uri': uri.current,
  }
`
