import type { SanityObject } from '~/types'
import type { Image } from 'sanity'

// Block Layout

export interface BlockLayout extends SanityObject {
  blockSpacing: BlockSpacing
  disabled: boolean
  hideWhen: HideWhen[]
}

export enum BlockSpacing {
  None = '',
  ExtraSmall = 'extraSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum HideWhen {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

// Block Background

export interface BlockBackground extends SanityObject {
  backgroundColor: BackgroundColor
  paddingTop: BlockPadding
  paddingBottom: BlockPadding
}

export enum BackgroundColor {
  None = '',
  Dark = 'dark',
}

export enum BlockPadding {
  Matching = 'matching',
  None = '',
  ExtraSmall = 'extraSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// Page SEO

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
