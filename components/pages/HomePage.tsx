import { useEffect, useState } from "react";
import type { Image } from 'sanity'

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

  useEffect(() => {

    client.fetch(getEnhancements).then((sections) => {
      setEnhancements(sections)
    }).finally(() => {
      setLoading(false)
    })

  }, []);

  return loading ? (
    <>
      <p>LOADING</p>
    </>
  ) : (

    <>
      <PageHead { ...page } />

      { page.bg &&
        <AnimateInView className='animate-slow-scale-down-in w-[300px] h-[300px] relative'>
          <SanityVisual
            className="w-[300px] h-[300px]"
            expand
            sizes='100vw'
            src={ page.bg } />
        </AnimateInView> }

      <div className="text-center w-11/12 mx-auto max-w-lg py-[100px]">
        <h1 className="text-3xl">HOME PAGE</h1>
        <h2 className="text-2xl">{ page.title }</h2>
        <h3 className="font-bold">{ page.enhancementsTitle }</h3>
        <p>{ page.enhancementsDescription }</p>

        <h2 className="text-2xl mt-lg">Enhancements Here:</h2>
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
      </div>
    </>

  )
}
