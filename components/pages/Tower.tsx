import PageHead from '~/components/layout/PageHead'
import SmartLink from '~/packages/smart-link/SmartLink'
import { Tower } from '~/types'
import { PanelWrap, PanelLeft, PanelRight, PanelTitle, PanelRightContent } from '~/components/global/Panels'
import EnhancementBlock from '~/components/blocks/enhancementBlocks/EnhancementBlock'

export default function TowerPage({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } />

      <PanelWrap>

        <PanelLeft theme={page.theme}>

          <div className="relative z-2">
            <p className="px-md"><SmartLink href="/">Back Home</SmartLink></p>
            <PanelTitle title={ page.title } />
          </div>

        </PanelLeft>

        <PanelRight>

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

                {page.blocks.map((block, index) => (
                  <EnhancementBlock {...block} key={index} />
                ))}
              </div>
            </div>
          </PanelRightContent>

        </PanelRight>
      </PanelWrap>
    </>
  )
}
