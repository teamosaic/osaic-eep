import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

import garnish from '~/assets/images/s.png';
import EnhancementBlock from '~/components/blocks/enhancementBlocks/EnhancementBlock';
import { Icon } from '~/components/global/buttons/Icon';
import { PanelLeft, PanelRight, PanelRightContent, PanelTitle, PanelWrap } from '~/components/global/Panels';
import PageHead from '~/components/layout/PageHead';
import SmartLink from '~/packages/smart-link/SmartLink';
import { getNextEnhancement } from '~/queries/enhancementQueries';
import { client } from '~/sanity/client';
import { EnhancementCategory } from '~/types';
import { ButtonIcon } from '~/types';

export default function EnhancementCategoryPage({ page }: { page: EnhancementCategory }) {
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNextEnhancement = async () => {
      if (page?.orderRank) {
        try {
          const enhancement = await client.fetch(getNextEnhancement, { currentOrderRank: page.orderRank });
          setNext(enhancement);
        } catch (error) {
          console.error('Error fetching next enhancement:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNextEnhancement();
  }, [page.orderRank]);

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const elementId = router.asPath.split('#')[1];

      // Delay the scroll to allow the content to render
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000); // Delay set to 0ms; adjust if needed for larger content
    }
  }, [router.asPath]);




  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PageHead { ...page } />

      <PanelWrap>
        <PanelLeft theme={page.theme}>
          <div className="relative z-2">
            <div className="px-gutter left-panel-back transition">
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
              {page.subheading ? (
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

              {page.description ? (
                <p className="
                font-marselis
                text-[24px]
                leading-[28px]
                text-evergreen
                font-[400] my-xs">
                  {page.description}
                </p>
              ) : null }

              <div>
                {page.blocks.map((block, index) => (
                  <EnhancementBlock {...block} key={index} />
                ))}
              </div>


            </div>

          </PanelRightContent>

          { !loading && next ? (
            <>
              <div className="relative bg-zircon text-evergreen text-center p-xs md:p-md rounded-tr-[32px] rounded-tl-[32px] overflow-hidden">

                <Image className="absolute top-0 right-0 w-full z-[1]" src={garnish} alt="" />

                <div className="relative z-[2]">
                <span className="uppercase font-marselis font-bold text-[16px] tracking-[1px] mb-xxs block">Up Next</span>
                <h5 className="style-h5 font-marselis">
                  {next?.title}
                </h5>

                <SmartLink href={next?.uri?.current}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    w-[67px]
                    h-[67px]
                    mx-auto
                    mt-xs
                    transition
                    hover:bg-evergreen
                    hover:text-white">
                  <Icon
                    className="scale-150"
                    type={ButtonIcon.RightArrow}
                  />
                </SmartLink>

                </div>

              </div>
            </>
          ) : null }

        </PanelRight>
      </PanelWrap>
    </>
  );
}
