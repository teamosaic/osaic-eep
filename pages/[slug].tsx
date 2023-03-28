import { client } from '../sanity/lib/client'
import Tower, { query } from '../components/Tower'
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

export async function getStaticProps({ params, previewData = {} }) {

  const previewToken = previewData?.token

  const page = await client.fetch(query)

  return {
    props: { page, previewToken }
  }
}

export async function getStaticPaths() {
  const pages = await client.fetch(`
    *[_type == 'tower']{
      slug
    }`)
  return {
    fallback: 'blocking',
    paths: pages.map(page => ({ params: {
      slug: page.slug.current
    }})),
  };
}
