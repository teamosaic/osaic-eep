import Head from 'next/head'
import type { Image } from 'sanity'
import { PageSeo } from '~/types'
import { useContext } from 'react'
import { SettingsContext } from '~/providers/settings'
import { urlForImage } from '~/packages/sanity-image/lib/urlBuilding'

interface PageHeadProps extends PageSeo {
  title?: string
  image?: Image
}

// Helper for generating standardized head tags from page data
export default function PageHead({
  title, // Use the title of the page as fallback
  image, // Use an image from the page as fallback
  metaTitle,
  metaDescription,
  metaImage,
  robots,
}: PageHeadProps): React.ReactElement {

  // Get global defaults
  const settings = useContext(SettingsContext)

  // Assemble the final values
  const values = {
    title,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || settings.metaDescription,
    metaImage: metaImage || image || settings.metaImage,
    robots,
  }

  return <HeadTags {...values} />
}

// Do the actual rendering of the Next head and it's tags
function HeadTags({
  title,
  metaTitle,
  metaDescription,
  metaImage,
  robots,
}: PageHeadProps): React.ReactElement {
  return (
    <Head>

      <title>{ title }</title>

      { metaTitle && <meta
          property='og:title'
          content={ metaTitle } /> }

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
