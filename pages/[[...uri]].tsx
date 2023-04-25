import { client } from '~/sanity/lib/client'
import DefaultLayout from '~/layouts/DefaultLayout'
import dynamic from 'next/dynamic'
import PagePreview from '~/sanity/components/PagePeview'
import {
  PageType,
  PageDocument,
  Tower as TowerPage,
  Article as ArticlePage,
} from '~/types'

// Page components
const Tower = dynamic(() => import('../components/pages/Tower'))
const Article = dynamic(() => import('../components/pages/Article'))

// Page queries
import { getTower, towerStaticPaths } from '~/queries/towerQueries'
import { getArticle, articleStaticPaths } from '~/queries/articleQueries'

export default function PageDelegator({ previewToken, page, settings }) {
  if (previewToken) {
    return <PagePreview {...{
      previewToken,
      query: pageQuery(page._type),
      params: { uri: page.uri },
      render,
    }} />
  } else {
    return render({ page, settings })
  }
}

// Render page components given required data
function render({ page, settings }: {
  page: PageDocument
  settings: object
}): React.ReactElement {
  return (
    <DefaultLayout {...{ settings, page }} >
      <PageComponent {...{ page }} />
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
    case PageType.Article:
      return <Article page={ page as ArticlePage } />
  }
}

// Return the page query to use
function pageQuery(type: PageType): string {
  switch(type) {
    case PageType.Tower: return getTower
    case PageType.Article: return getArticle
  }
}

// Parse a URI to figure out the type, falling back to Towers
function determineTypeFromUri(uri: string): PageType {
  if (uri.startsWith('/articles/')) return PageType.Article
  return PageType.Tower
}

// Fetch the page data
export async function getStaticProps({ params, previewData}) {

  // Convert Next's uri array back into a string
  const uri = '/' + (params.uri || ['']).join('/')

  // Figure out the type of the page by looking at the uri
  const type = determineTypeFromUri(uri)

  // If previewing, update the config to use the preview token so we can fetch
  // draft entries when previewing
  const previewToken = previewData?.token || null
  if (previewToken) client.config({ token: previewToken })

  // Fetch the request page by slug
  const [ page, settings ] = await Promise.all([
    client.fetch(pageQuery(type), { uri }),
    client.fetch(`*[_type == 'settings'][0]`)
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

  // Get all page slugs
  const pages = (await Promise.all([
    client.fetch(towerStaticPaths),
    client.fetch(articleStaticPaths),
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
