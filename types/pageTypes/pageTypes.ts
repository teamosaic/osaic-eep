import type { Image } from 'sanity'

import { Settings } from '../globalTypes'
import { SanityObject } from '../sanityTypes'

// The Sanity schema type names that generate pages
export enum PageType {
  Tower = 'tower',
  Home = 'homePage'
}

// A helper type for a Santiy document whose type is one of the page types
export interface PageDocument extends SanityObject, PageSeo {
  _type: PageType
  title: string
  settings: Settings
  uri: { current: string }
}

// SEO fields for pages
export interface PageSeo {
  metaTitle: string
  metaDescription: string
  metaImage: Image
  robots: RobotsRule[]
}

// SEO rules
export enum RobotsRule {
  noindex = 'noindex',
  nofollow = 'nofollow',
  noarchive = 'noarchive',
}
