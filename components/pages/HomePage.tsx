import { useEffect, useState } from "react";

import EnhancementCategory from '~/components/global/EnhancementCategory'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import SanityVisual from '~/components/global/SanityVisual'
import PageHead from '~/components/layout/PageHead'
import { getEnhancements } from '~/queries/enhancementQueries'
import { client } from '~/sanity/client'
import { Home, Settings } from '~/types'

export default function HomePage({ page, settings }: { page: Home, settings: Settings }) {
  const [loading, setLoading] = useState(true)
  const [enhancementCategories, setEnhancements] = useState([])
  const [visibleCategoryKey, setVisibleCategoryKey] = useState(null);

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

  const handleVisibilityChange = (key) => {
    setVisibleCategoryKey(prevKey => (prevKey === key ? null : key));
  };

  return (
    <>
      <PageHead { ...page } />


      <div className="flex">

        <div className="
          lg:sticky
          top-0
          left-0
          h-[100vh]
          w-home-panel
          overflow-hidden
          bg-black
          flex
          shrink-0
          items-end">

          { page.background &&
              <SanityVisual
                expand
                sizes='100vw'
                src={ page.background } /> }

            <div className="bg-black/50 absolute inset-0 z-1"></div>

            <h1
              className="
                font-marselis
                text-white
                relative
                z-2
                p-gutter
                text-home-heading
                leading-home-heading
                font-[400]
                lg:font-[350]
              ">{ page.title }</h1>

        </div>

        <div className="relative grow bg-white min-h-[100vh]">

          <div className="max-w-[750px] mx-auto mt-xs p-sm">
            <h2 className="style-h5 font-marselis text-evergreen">{ page.enhancementsTitle }</h2>
            <p className="style-body mt-xs mb-sm">{ page.enhancementsDescription }</p>

            { loading ? (
              <Spinner />
            ) : (
              <>
                {enhancementCategories.map((category, index) => (
                  <div key={index}>
                    <EnhancementCategory
                      category={category}
                      isVisible={visibleCategoryKey === index}
                      onVisibilityChange={() => handleVisibilityChange(index)}
                    />
                  </div>

                ))}
              </>
            )}


          </div>


          {/* footer */}
          <div className="bg-evergreen p-sm text-white">
            <MarketingPortableText value={ settings.footer }/>
          </div>
        </div>
      </div>


    </>
  )
}
