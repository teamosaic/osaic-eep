import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'


// SEO fields for pages
export interface Settings {
  instagram: string
  twitter: string
  linkedin: string
  footer: PortableTextBlock[]
  metaTitleSuffix: string
  metaDescription: string
  metaImage: Image
}
