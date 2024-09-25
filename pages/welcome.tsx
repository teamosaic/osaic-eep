import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import logo from '~/assets/images/green-logo.svg'
import bgLogo from '~/assets/images/large-bg-logo.svg'
import AnimateInView from '~/packages/animate-in-view'
import { getWelcome } from '~/queries/welcomeQueries'
import { client } from '~/sanity/client'

export default function Welcome({ previewSite }) {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if ((status == 'authenticated')) {
      router.push('/')
    }
  })

  return (
    <div className='relative overflow-hidden flex items-center px-gutter justify-center h-full w-full bg-primary'>
      <AnimateInView className='w-full h-full absolute animate-slow-scale-down-in [animation-delay:0.01s]'>
        <Image
          className="when-mobile:h-14 w-auto opacity-20"
          fill
          style={{ objectFit: "cover" }}
          src={bgLogo}
          alt="Osaic Logo"
        />
      </AnimateInView>
      {status != 'authenticated' && (
        <AnimateInView className='animate-slide-up-in [animation-delay:0.2s]'>
          <SSOModal previewSite={previewSite} />
        </AnimateInView>
      )}


    </div>
  )
}

function SSOModal({ previewSite }) {
  return (
    <div className='relative flex flex-col bg-white px-10 md:px-20 py-14 rounded-md items-center text-center'>
      <AnimateInView className='animate-slide-up-in [animation-delay:0.3s]'>
        <span className="sr-only">Osaic</span>
        <Image
          className="ww-auto"
          priority
          src={logo}
          alt="Osaic Logo"
        />
      </AnimateInView>

      { previewSite ? (
        <AnimateInView className='animate-slide-up-in [animation-delay:0.5s]'>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/signin/credentials"
            className="flex font-semibold text-primary relative px-20 py-5 bg-light-neon rounded-full">
            Log In
          </a>
        </AnimateInView>
      ) : (
        <AnimateInView className='animate-slide-up-in [animation-delay:0.5s]'>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/login/saml"
            className="flex mt-5 font-semibold text-primary relative px-20 py-5 bg-light-neon rounded-full">
            Log In With SSO
          </a>
        </AnimateInView>
      )}
    </div>
  )
}

// Fetch the page data
export async function getStaticProps({ previewData }) {
  const previewSite = (process.env.IS_PREVIEW_SITE && process.env.IS_PREVIEW_SITE === 'true')

  // If previewing, update the config to use the preview token so we can fetch.
  // draft entries when previewing
  const previewToken = previewData?.token || null
  if (previewToken) client.config({ token: previewToken })

  // Fetch the request page by slug
  const [page] = await Promise.all([
    client.fetch(getWelcome),
  ])

  return {
    props: { page, previewSite }
  }
}
