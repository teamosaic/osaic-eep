import PageHead from '~/components/layout/PageHead'
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
            <p>Content Here</p>
            <p><SmartLink href="/">Back Home</SmartLink></p>
          </PanelRightContent>

        </PanelRight>
      </PanelWrap>
    </>
  )
}
