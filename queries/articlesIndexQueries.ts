import { groq } from 'next-sanity'
import { blocksFragment } from './fragments/blocksFragment'
import { articleCardFragment } from './fragments/articleCardFragment'

// Settings
const perPage = 3

export const getArticlesIndex = groq`
  *[_type == 'articlesIndex']{
    ...,

    // Get the blocks
    headerBlocks[] { ${ blocksFragment } },
    footerBlocks[] { ${ blocksFragment } },

    // Get the initial page of articles
    'initialArticles': *[_type == 'article']
    | order(date desc) [0...${perPage}]  {
      ${ articleCardFragment }
    },
  }[0]
`

export const articlesIndexStaticPaths = groq`
  *[_type == 'articlesIndex']{
     'uri': uri.current,
  }
`
