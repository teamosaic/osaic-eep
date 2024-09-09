import PageHead from '~/components/layout/PageHead'
import SmartLink from '~/packages/smart-link/SmartLink'
import { Tower } from '~/types'
import { PanelWrap, PanelLeft, PanelRight, PanelTitle, PanelRightContent } from '~/components/global/Panels'
import EnhancementBlock from '~/components/blocks/enhancementBlocks/EnhancementBlock'
import { Icon } from '~/components/global/buttons/Icon'
import {ButtonIcon} from '~/types'

export default function TowerPage({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } />

      <PanelWrap>

        <PanelLeft theme={page.theme}>

          <div className="relative z-2">
            <div className="px-md">
              <SmartLink href="/" className="flex items-center">
                <Icon
                  className="h-4 rotate-[180deg]"
                  type={ButtonIcon.RightArrow}
                />
                <span className="ml-2 font-marselis font-bold uppercase text-[16px] tracking-[1px]">Back Home</span>
              </SmartLink>
            </div>
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
