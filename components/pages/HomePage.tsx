import { useEffect, useState } from "react";

import PageHead from '~/components/layout/PageHead'
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
              <div key={enhancement._id}>
                <p>{enhancement.enhancementTitle}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>

  )
}
