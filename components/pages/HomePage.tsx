import { useEffect, useState } from "react";

import EnhancementCategory from '~/components/global/EnhancementCategory'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import SanityVisual from '~/components/global/SanityVisual'
import Spinner from '~/components/global/Spinner'
import PageHead from '~/components/layout/PageHead'
import { PanelWrap, PanelLeft, PanelRight, PanelTitle, PanelRightContent } from '~/components/global/Panels'

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


      <PanelWrap>

        <PanelLeft>

          { page.background &&
            <SanityVisual
              expand
              sizes='100vw'
              src={ page.background } /> }

          <div className="bg-black/50 absolute inset-0 z-1"></div>
          <PanelTitle title={ page.title } />
        </PanelLeft>

        <PanelRight>


          {/* garnish on mobile */}
          <Image className="when-not-mobile:hidden absolute top-0 right-0 w-[300px] h-auto z-[1]" src={garnish} alt="" />

          <PanelRightContent>
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

          </PanelRightContent>

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

        </PanelRight>

      </PanelWrap>

    </>
  )
}
