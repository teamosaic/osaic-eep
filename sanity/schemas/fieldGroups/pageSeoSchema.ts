import { setGroup, createListOptionsFromEnum } from '~/sanity/lib/schema'
import { RobotsRule } from '~/types'

export const metaTitle = {
  name: 'metaTitle',
  type: 'string',
  description: 'If empty, the Entry Title will be used.',
}

export const metaDescription = {
  name: 'metaDescription',
  type: 'text',
  description: 'Best practice is to stay under 160 characters.',

}

export const metaImage = {
  name: 'metaImage',
  type: 'image',
  description: 'Recommendeed image size is 1200 x 627.',
}

export const robots = {
  name: 'robots',
  type: 'array',
  description: 'For a definition of these terms, see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives.',
  of: [{ type: 'string' }],
  options: {
    list: createListOptionsFromEnum(RobotsRule),
  },
}

export const seoFields = setGroup('seo', [
  metaTitle,
  metaDescription,
  metaImage,
  robots,
])
