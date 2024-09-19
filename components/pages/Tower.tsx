import Image from 'next/image';
import { useEffect, useState } from "react";

import garnish from '~/assets/images/garnish-a.svg';
import EnhancementCategory from '~/components/global/EnhancementCategory'
import { PanelLeft, PanelRight, PanelRightContent,PanelTitle, PanelWrap } from '~/components/global/Panels'
import SanityVisual from '~/components/global/SanityVisual'
import Spinner from '~/components/global/Spinner'
import PageHead from '~/components/layout/PageHead'
import { getEnhancements } from '~/queries/enhancementQueries'
import { client } from '~/sanity/client'
import { Tower } from '~/types'

export default function TowerPage({ page }: { page: Tower }) {
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

        <PanelLeft noGarnish enableOverlay={page.enableOverlay}>

          { page.background &&
            <SanityVisual
              expand
              sizes='100vw'
              src={ page.background } /> }\

          { page.enableOverlay ? (
            <div className="absolute inset-0 z-1 bg-black/50"></div>
          ) : null }

          <PanelTitle title={ page.title } />
        </PanelLeft>

        <PanelRight>


          {/* garnish on mobile */}
          <Image className="when-not-mobile:hidden absolute top-0 right-0 w-[300px] h-auto z-[1]" src={garnish} alt="" />

          <PanelRightContent>
            <h2 className="when-not-mobile:mt-lg style-h5 font-marselis text-evergreen">{ page.subheading }</h2>
            <p className="font-cordale style-body mt-xs mb-sm">{ page.description }</p>

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
        </PanelRight>
      </PanelWrap>
    </>
  )
}
