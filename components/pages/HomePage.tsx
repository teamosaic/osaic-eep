import { useEffect, useState } from "react";

import SanityVisual from '~/components/global/SanityVisual'
import PageHead from '~/components/layout/PageHead'
import { handleize } from '~/lib/helpers'
import AnimateInView from '~/packages/animate-in-view'
import SmartLink from '~/packages/smart-link/SmartLink'
import { getEnhancements } from '~/queries/enhancementQueries'
import { client } from '~/sanity/client'
import { Home } from '~/types'

export default function HomePage({ page }: { page: Home }) {
  const [loading, setLoading] = useState(true)
  const [enhancementCategories, setEnhancements] = useState([])

  console.log('pagebg', page.bg)

  useEffect(() => {

    client.fetch(getEnhancements).then((sections) => {
      setEnhancements(sections)
    }).finally(() => {
      setLoading(false)
    })

  }, []);


  function Spinner() {
    return (
      <svg
        className='animate-spin'
        width='24' height='24' viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z' fill='currentColor' />
      </svg>
    )
  }

  return (
    <>
      <PageHead { ...page } />

      { page.background &&
        <AnimateInView className='animate-slow-scale-down-in w-[300px] h-[300px] relative'>
          <SanityVisual
            className="w-[300px] h-[300px]"
            expand
            sizes='100vw'
            src={ page.background } />
        </AnimateInView> }

      <div className="text-center w-11/12 mx-auto max-w-lg py-[100px]">
        <h1 className="text-3xl">{ page.title }</h1>


        <div className="bg-white rounded-lg p-md">

          <h3 className="font-bold">{ page.enhancementsTitle }</h3>
          <p>{ page.enhancementsDescription }</p>

          { loading ? (
            <Spinner />
          ) : (
            <>
              {enhancementCategories.map((category) => (
                <div key={category._id}>
                  <h3>{category.title}</h3>
                  <p>{ category.blocks.length }</p>

                  { category.subhead ? (
                    <h4>{category.subhead}</h4>
                  ) : null }

                  { category.description ? (
                    <p>{category.description}</p>
                  ) : null }

                  {category.blocks.map((enhancement) => (
                    <div key={enhancement._key}>
                      <SmartLink href={`${category.uri.current}?section=${handleize(enhancement.enhancementTitle)}`}>
                        {enhancement.enhancementTitle}
                      </SmartLink>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}

        </div>
      </div>
    </>
  )
}
