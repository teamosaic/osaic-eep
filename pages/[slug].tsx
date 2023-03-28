import { client } from '../sanity/lib/client'
import Tower, { getTowerBySlug } from '../components/Tower'
import { lazy } from 'react' // Todo: look into this wrapper
import { PreviewSuspense } from 'next-sanity/preview' // Todo: look into this

const PreviewTower = lazy(() => import('../components/PreviewTower'))

export default function TowerPage({ previewToken, page }) {

  if (previewToken) {
    return <PreviewSuspense fallback='Loading...'>
      <PreviewTower {...{ previewToken, page }}  />
    </PreviewSuspense>
  }

  return <Tower page={page} />
}

export async function getStaticProps({ params, previewData}) {

  // Get the requested slug and whether we're previewing
  const { slug } = params,
    previewToken = previewData?.token || null

  // If previewing, update the config to use the preview token so we can fetch
  // draft entries when previewing
  if (previewToken) client.config({ token: previewToken })

  // Fetch the request page by slug
  const page = await client.fetch(getTowerBySlug, { slug })

  // Return 404
  if (!page) return { notFound: true }

  // Return data, including previewToken so it can be used to fetch more
  // data client side when using live preview
  return {
    props: { page, previewToken }
  }
}

export async function getStaticPaths() {
  const pages = await client.fetch(`
    *[_type == 'tower']{
      'slug': slug.current
    }`)
  return {
    fallback: 'blocking',
    paths: pages.map(page => ({ params: {
      slug: page.slug
    }})),
  };
}
