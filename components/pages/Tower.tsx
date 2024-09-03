import PageHead from '~/components/layout/PageHead'
import { EEPButton } from '~/components/global/EEPButton'
import SmartLink from '~/packages/smart-link/SmartLink'
import { Tower } from '~/types'
import { PanelWrap, PanelLeft, PanelRight, PanelTitle, PanelRightContent } from '~/components/global/Panels'
import SanityVisual from '~/components/global/SanityVisual'
// import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'

export default function TowerPage({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } />

      <PanelWrap>

        <PanelLeft theme={page.theme}>

          { page.garnish &&
            <SanityVisual
              expand
              sizes='100vw'
              src={ page.garnish } /> }


          <div className="relative z-2">
            <p className="px-md"><SmartLink href="/">Back Home</SmartLink></p>
            <PanelTitle title={ page.title } />
          </div>

        </PanelLeft>

        <PanelRight>


          {/* garnish on mobile */}
          {/* <Image className="when-not-mobile:hidden absolute top-0 right-0 w-[300px] h-auto z-[1]" src={garnish} alt="" /> */}

          <PanelRightContent>
            <div className="mt-lg">

              { page.subheading ? (
                <h4
                  className="
                    font-marselis
                    text-[40px]
                    leading-[46px]
                    text-evergreen
                    font-[400]"
                >
                  {page.subheading}
                </h4>
              ) : null }

              { page.description ? (
                <p className="
                font-marselis
                text-[24px]
                leading-[28px]
                text-evergreen
                font-[400] my-xs">
              {page.description}</p>
              ) : null }


              <div>

                {page.blocks.map((item, index) => (
                  <div className={item.type} key={index}>
                    <div className="my-md">
                      <div
                        className="
                          font-marselis
                          text-[40px]
                          leading-[46px]
                          text-evergreen
                          font-[400]"
                        >
                        {item.enhancementTitle}
                      </div>

                      { item.ctaUrl ? (
                        <EEPButton
                          href={item.ctaUrl}
                          label={item.ctaText} />
                      ) : null }

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PanelRightContent>

        </PanelRight>
      </PanelWrap>
    </>
  )
}
