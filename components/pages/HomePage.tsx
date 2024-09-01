import { useEffect, useState } from "react";

import EnhancementCategory from '~/components/global/EnhancementCategory'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import SanityVisual from '~/components/global/SanityVisual'
import Spinner from '~/components/global/Spinner'
import PageHead from '~/components/layout/PageHead'
import { getEnhancements } from '~/queries/enhancementQueries'
import { client } from '~/sanity/client'
import { Home, Settings } from '~/types'
import garnish from '~/assets/images/garnish-a.svg';
import Image from 'next/image';

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


  const handleVisibilityChange = (key) => {
    setVisibleCategoryKey(prevKey => (prevKey === key ? null : key));
  };

  return (
    <>
      <PageHead { ...page } />


      <div className="when-not-mobile:flex">

        <div className="
          when-not-mobile:sticky
          when-not-mobile:w-home-panel
          when-not-mobile:flex-nowrap
          when-not-mobile:h-[100vh]
          relative
          w-full
          h-[80vh]
          when-not-mobile:flex
          when-not-mobile:flex-wrap
          top-0
          left-0
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
                max-w-[500px]
                pb-[100px]
                when-not-mobile:max-w-full
                when-not-mobile:pb-sm
              ">{ page.title }</h1>

        </div>

        <div className="
          relative
          grow
          bg-white
          rounded-large
          -mt-[32px]
          when-not-mobile:rounded-0
          when-not-mobile:mt-0
          when-not-mobile:min-h-[100vh]">

          {/* garnish on mobile */}
          <Image className="when-not-mobile:hidden absolute top-0 right-0 w-[300px] h-auto z-[1]" src={garnish} alt="" />

          <div className="
            when-not-mobile:max-w-[750px]
            when-not-mobile:mx-auto
            when-not-mobile:mt-xs
            when-not-mobile:
            px-sm
            py-md
            rounded-large
            when-not-mobile:p-sm
            relative
            z-[2]">
            <h2 className="style-h5 font-marselis text-evergreen">{ page.enhancementsTitle }</h2>
            <p className="font-cordale style-body mt-xs mb-sm">{ page.enhancementsDescription }</p>

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

          <div className="when-not-mobile:hidden bg-white h-[32px] w-full block relative z-[3] rounded-b-large"></div>

          {/* footer */}
          <div className="
            bg-evergreen
            px-sm
            py-[100px]
            when-not-mobile:p-sm
            when-not-mobile:mt-0
            text-white
            -mt-[32px]
            relative
            z-[1]
            ">
            <MarketingPortableText value={ settings.footer }/>
          </div>
        </div>
      </div>


    </>
  )
}
