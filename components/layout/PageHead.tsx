import Head from 'next/head'
import type { Image } from 'sanity'
import { PageSeo } from '~/types'
import { useContext } from 'react'
import { SettingsContext } from '~/providers/settings'
import { urlForImage } from '~/packages/sanity-image/lib/urlBuilding'
import { useRouter } from 'next/router'

interface PageHeadProps extends PageSeo {
  title?: string
  image?: Image
  description?: string
}

// Helper for generating standardized head tags from page data
export default function PageHead({

  // Page specific values to use as fallback
  title,
  image,
  description,

  // Explicit meta choices from seoSchema
  metaTitle,
  metaDescription,
  metaImage,
  robots,

}: PageHeadProps): React.ReactElement {

  // Setup state
  const settings = useContext(SettingsContext)
  const router = useRouter()

  // Assemble the final values
  const values = {
    title: metaTitle || (settings?.metaTitleSuffix ?
        `${title} | ${settings?.metaTitleSuffix}` :
        title ),
    description: metaDescription || description || settings?.metaDescription,
    image: metaImage || image || settings?.metaImage,
    robots,
    canonicalUrl: process.env.URL ?
      `${process.env.URL}${router.asPath}` : null
  }

  return <HeadTags {...values} />
}

type HeadTagsProps = Pick<PageHeadProps,
  'title' | 'description' | 'image' | 'robots'
> & {
  canonicalUrl?: string
}

// Do the actual rendering of the Next head and it's tags
function HeadTags({
  title,
  description,
  image,
  robots,
  canonicalUrl,
}: HeadTagsProps): React.ReactElement {
  return (
    <Head>

      <title>{ title }</title>

      { description && <meta
          name='description'
          content={ description } /> }

      { image && <meta
          property='og:image'
          content={ urlForImage(image).width(1200).url() } /> }

      { robots?.length && <meta
          name='robots'
          content={ robots.join(', ') } /> }

      { canonicalUrl && <link
          rel='canonical'
          href={ canonicalUrl } /> }

    </Head>
  )

}
