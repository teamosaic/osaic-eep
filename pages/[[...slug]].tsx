import { client } from '~/sanity/lib/client'
import DefaultLayout from '~/layouts/Default'
import PagePreview from '~/sanity/components/PagePeview'
import Tower, { getTowerBySlug } from '~/components/Tower'

export default function TowerPage({ previewToken, page, settings }) {
  if (previewToken) {
    return <PagePreview {...{ previewToken, uri: page.slug, render }} />
  } else {
    return render({ page, settings })
  }
}

// Render page components given required data
function render({ page, settings }) {
  return (
    <DefaultLayout {...{ settings }} >
      <Tower {...{ page }} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ params, previewData}) {

  // Get the preview token
  const previewToken = previewData?.token || null

  // Stringify slug arrays again
  let { slug } = params
  slug = (slug || ['__home__']).join('/')

  // If previewing, update the config to use the preview token so we can fetch
  // draft entries when previewing
  if (previewToken) client.config({ token: previewToken })

  // Fetch the request page by slug
  const [ page, settings ] = await Promise.all([
    client.fetch(getTowerBySlug, { slug }),
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

  // Get all Tower slugs
  const pages = await client.fetch(`
    *[_type == 'tower']{
      'slug': slug.current
    }`)

  // Make the slug an array of path segments, which is what Next requires when
  // doing an optional catach all file like [[...slug]].  I went this route
  // so that pages could define their own subdirs but mostly so I could get
  // return an empty string slug for the homepage.
  const paths = pages.map(page => ({ params: {
      slug: (page.slug == '__home__' ? '' : page.slug).split('/')
    }}))

  return {
    fallback: 'blocking',
    paths,
  };
}
