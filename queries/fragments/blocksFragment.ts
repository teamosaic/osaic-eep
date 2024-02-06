import { groq } from 'next-sanity'

import { visualField } from '../fields/assetFields'
import { articleCardFragment } from './articleCardFragment'

export const blocksFragment = groq`
  ...,

  // De-reference image fields for acccessing image metadata
  _type == 'heroBlock' => {
    ${ visualField('background') },
  },

  // De-reference image fields for acccessing image metadata
  _type == 'splitBlock' => {
    ${ visualField('media') },
  },

  // Fetch recent articles
  _type == 'articlesBlock' => {
    'recentArticles': *[
      _type == 'article'
    ] | order(date desc, _id desc) [0...3]  {
      ${ articleCardFragment },
    },
    'totalArticles': count(*[_type == "article"]),
  },

  _type == 'reusableSectionBlock' => {
    reusableSection[]->
  }
`
