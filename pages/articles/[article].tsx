import { client } from '~/sanity/lib/client'
import DefaultLayout from '~/layouts/Default'
import PagePreview from '~/sanity/components/PagePeview'
import Article, { getArticleBySlug } from '~/components/Pages/Article'

export default function ArticlePage({ previewToken, page, settings }) {
  if (previewToken) {
    return <PagePreview {...{
      previewToken,
      query: getArticleBySlug,
      params: { slug: page.slug },
      render,
    }} />
  } else {
    return render({ page, settings })
  }
}

// Render page components given required data
function render({ page, settings }) {
  return (
    <DefaultLayout {...{ settings }} >
      <Article {...{ page }} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ params, previewData}) {

  // If previewing, update the config to use the preview token so we can fetch
  // draft entries when previewing
  const previewToken = previewData?.token || null
  if (previewToken) client.config({ token: previewToken })

  // Fetch the request page by slug
  const slug = params.article
  const [ page, settings ] = await Promise.all([
    client.fetch(getArticleBySlug, { slug }),
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

  // Get only the 3 most recent articles to test ISR
  const articles = await client.fetch(`
    *[_type == 'article'] [0...3] | order(date desc) {
      'slug': slug.current
    } `)

  return {
    fallback: 'blocking',
    paths: articles.map(page => ({
      params: { article: page.slug }
    }))
  };
}
