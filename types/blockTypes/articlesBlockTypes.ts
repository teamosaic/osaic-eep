import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import type { BlockLayout } from '~/types'

export interface ArticlesBlock extends BlockLayout {
  headline: PortableTextBlock[]
  recentArticles: ArticleCard[]
}

export interface ArticleCard {
  _id: string
  title: string
  date: string
  excerpt: string
  image: Image
  uri: string
}
