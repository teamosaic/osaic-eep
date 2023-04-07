import type { SanityObject } from './sanityTypes'

// The Sanity schema type names that generate pages
export enum PageType {
  Tower = 'tower',
  Article = 'article',
}

// Simplify getting an array of all page type values
export const pageTypeValues: string[] = Object.values(PageType)

// A helper type for a Santiy document whose type is one of the page types
export interface PageDocument extends SanityObject {
  _type: PageType
}
