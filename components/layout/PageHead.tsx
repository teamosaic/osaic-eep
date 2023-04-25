import Head from 'next/head'
import type { Image } from 'sanity'
import { PageSeo } from '~/types'
import { useContext } from 'react'
import { SettingsContext } from '~/providers/settings'
import { urlForImage } from '~/packages/sanity-image/lib/urlBuilding'

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

  // Get global defaults
  const settings = useContext(SettingsContext)

  // Assemble the final values
  const values = {
    metaTitle: metaTitle || (settings.metaTitleSuffix ?
        `${title} | ${settings.metaTitleSuffix}` :
        title ),
    metaDescription: metaDescription || description || settings.metaDescription,
    metaImage: metaImage || image || settings.metaImage,
    robots,
  }

  return <HeadTags {...values} />
}

// Do the actual rendering of the Next head and it's tags
function HeadTags({
  metaTitle,
  metaDescription,
  metaImage,
  robots,
}: PageHeadProps): React.ReactElement {
  return (
    <Head>

      <title>{ metaTitle }</title>

      { metaDescription && <meta
          name='description'
          content={ metaDescription } /> }

      { metaImage && <meta
          property='og:image'
          content={ urlForImage(metaImage).width(1200).url() } /> }

      { robots?.length && <meta
          name='robots'
          content={ robots.join(', ') } /> }

    </Head>
  )

}
