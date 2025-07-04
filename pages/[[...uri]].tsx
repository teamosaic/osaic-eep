import dynamic from 'next/dynamic'

import DefaultLayout from '~/layouts/DefaultLayout'
import { getSettings } from '~/queries/settingsQueries'
import { makeClient, makePreviewClient } from '~/sanity/client'
import PagePreview from '~/sanity/components/PagePeview'
import {
  EnhancementCategory as EnhancementCategoryPage,  PageDocument,
  PageType,
  Settings,
  Tower as TowerPage} from '~/types'

// Page components
const EnhancementCategory = dynamic(() => import('../components/pages/EnhancementCategory'))
const Tower = dynamic(() => import('../components/pages/Tower'))

// Page queries
import { enhancementStaticPaths,getEnhancement } from '~/queries/enhancementQueries'
import { getTower, towerStaticPaths } from '~/queries/towerQueries'

export default function PageDelegator({ previewToken, page, settings, previewSite }) {

  if (previewToken) {
    return <PagePreview {...{
      previewToken,
      query: pageQuery(page._type),
      params: { uri: page.uri },
      render,
    }} />
  } else {
    return render({ page, settings, previewSite })
  }
}

// Render page components given required data
function render({ page, settings, previewSite }: {
  page: PageDocument
  settings: Settings
  previewSite: string
}): React.ReactElement {
  return (
    <DefaultLayout previewSite={previewSite} {...{ settings, page }} >
      <PageComponent {...{ settings, page }} />
    </DefaultLayout>
  )
}

// Render the appropriate page component
function PageComponent({ page }: {
  page: PageDocument
}): React.ReactElement {
  switch(page._type) {
    case PageType.Tower:
      return <Tower page={ page as TowerPage } />
    case PageType.Category:
      return <EnhancementCategory page={ page as EnhancementCategoryPage } />
  }
}

// Return the page query to use
function pageQuery(type: PageType): string {
  switch(type) {
    case PageType.Tower: return getTower
    case PageType.Category: return getEnhancement
  }
}

// Parse a URI to figure out the type, falling back to Towers
function determineTypeFromUri(uri: string): PageType {
  if (uri.includes('/enhancements/')) return PageType.Category
  return PageType.Tower
}

// Fetch the page data
export async function getStaticProps({ params, previewData}) {

  // Convert Next's uri array back into a string
  const uri = '/' + (params.uri || ['']).join('/')

  // Figure out the type of the page by looking at the uri
  const type = determineTypeFromUri(uri)

  // If previewing, use preview client so we can fetch draft entries
  const previewToken = previewData?.token || null,
    client = previewToken ?
      makePreviewClient(previewToken) :
      makeClient()

  // Fetch the request page by slug
  const [ page, settings ] = await Promise.all([
    client.fetch(pageQuery(type), { uri }),
    client.fetch(getSettings),
  ])

  // Return 404
  if (!page) return { notFound: true }

  // Return data, including previewToken so it can be used to fetch more
  // data client side when using live preview
  return {
    props: { page, settings, previewToken }
  }
}

export async function getStaticPaths() {
  const client = makeClient()

  // Get all page slugs
  const pages = (await Promise.all([
    client.fetch(towerStaticPaths),
    client.fetch(enhancementStaticPaths),
  ])).flat()

  // Make the slug an array of path segments, which is what Next requires when
  // doing an optional catch all file like [[...slug]].  I went this route
  // so that pages could define their own subdirs but mostly so I could get
  // return an empty string slug for the homepage.
  const paths = pages.map(page => ({
    params: {
      uri: page.uri
        .slice(1) // Ignore the opening slash
        .split('/') // Split up remaining slashes
    }
  }))

  return {
    fallback: 'blocking', // Fetch data on demand if path not present
    paths,
  }
}
