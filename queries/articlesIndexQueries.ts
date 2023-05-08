import { groq } from 'next-sanity'
import { blocksFragment } from './fragments/blocksFragment'
import { articleCardFragment } from './fragments/articleCardFragment'

// Settings
const perPage = 3

export const getArticlesIndex = groq`
  *[_type == 'articlesIndex'] {
    ...,

    // Get the blocks
    headerBlocks[] { ${ blocksFragment } },
    footerBlocks[] { ${ blocksFragment } },

    // Get the initial page of articles
    'initialArticles': *[
      _type == 'article'
    ] | order(date desc) [0...${perPage}]  {
      ${ articleCardFragment }
    },

    // Get the total count of articles
    'totalArticles': count(*[_type == "article"]),
  }[0]
`

// Used by load more button on articles listing page. This follows Sanity's
// recommendation on how to implement pagination
// https://www.sanity.io/docs/paginating-with-groq#3b34cbbe5153
export const getMoreArticles = groq`
  *[
    _type == 'article' &&
    (date < $lastDate || (date == $lastDate && _id < $lastId))
  ] | order(date desc) [0...${perPage}]  {
    ${ articleCardFragment }
  }
`

export const articlesIndexStaticPaths = groq`
  *[_type == 'articlesIndex'] {
     'uri': uri.current,
  }
`

