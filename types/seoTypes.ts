import type { Image } from 'sanity'

// Common seo fileds
export interface PageSeo {
  metaTitle: string
  metaDescription: string
  metaImage: Image
  robots: RobotsRule[]
}

export enum RobotsRule {
  noindex = 'noindex',
  nofollow = 'nofollow',
  noarchive = 'noarchive',
}
