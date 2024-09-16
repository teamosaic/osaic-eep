import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from "react";
import AnimateHeight from 'react-animate-height';

import close from '~/assets/images/close.svg';
import Caret from '~/components/global/Caret';
import {
  CategoryContainer,
  CategoryContent,
  CategoryHeading,
  CategoryPill,
  CategoryTitle } from '~/components/global/Category'
import { EnhancementLink } from '~/components/global/Enhancement'
import SanityVisual from '~/components/global/SanityVisual'
import { handleize } from '~/lib/helpers'
import { EnhancementCategoryInterface } from '~/types'

interface EnhancementCategoryProps extends EnhancementCategoryInterface {
  isVisible: boolean;
  onVisibilityChange: () => void;
}

export default function EnhancementCategory({ category, isVisible, onVisibilityChange }: EnhancementCategoryProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const toggleVisibility = () => {
    onVisibilityChange();
    setVisible(!visible);
  };

  const featuredEnhancements = category.blocks.filter(enhancement => enhancement.featured);
  const nonFeaturedEnhancementsExist = category.blocks.some(enhancement => !enhancement.featured);

  return (
    <>
      <CategoryContainer visible={visible}>
        <CategoryHeading onClick={toggleVisibility} >
          <CategoryTitle title={category.title} />

          <div>
            <Image className={classNames(
              "w-[24px] h-auto transition absolute -mt-3 -ml-5 transition",
              {
                "rotate-[45deg]": !visible,
              })} src={close} alt='' />
          </div>

        </CategoryHeading>

        <AnimateHeight
          duration={ 500 }
          height={visible ? 'auto' : 0}
        >
          <CategoryContent>
            <div className="max-w-[350px] mb-xxs">
              { category.subheading ? (
                <h4 className="font-marselis text-[18px] leading-[28px] text-evergreen font-[400] mb-3">{category.subheading}</h4>
              ) : null }
              { category.description ? (
                <p>{category.description}</p>
              ) : null }
            </div>


            {featuredEnhancements.map((enhancement, index) => (
              <Link key={index} href={`${category.uri.current}#${handleize(enhancement.enhancementTitle)}`} scroll={false}>
                <EnhancementLink theme={enhancement.cardTheme}>
                  <span className="flex grow items-center">

                    { enhancement.featuredImage ? (
                      <>
                        <div className="h-[80px] shrink-0 block w-[80px] overflow-hidden rounded-[10px] shrink-0 mr-5 relative">
                          <SanityVisual
                            expand
                            sizes='100px'
                            src={ enhancement.image } />
                        </div>

                      </>

                    ) : null }

                    <span className="w-full md:w-3/4 block text-enhancement-title leading-enhancement-title font-marselis">{enhancement.enhancementTitle}</span>
                  </span>
                  <span className="shrink-0">
                    <Caret theme={enhancement.cardTheme} />
                  </span>
                </EnhancementLink>
              </Link>
            ))}

            {nonFeaturedEnhancementsExist && (
              <Link href={category.uri.current}
                className="flex items-center justify-center text-center mt-xs p-2 text-evergreen underline uppercase font-marselis">
                View Past Updates
                <CategoryPill
                  visible={visible}
                  hovered={false}
                  count={category.blocks.length}
                />
              </Link>
            )}

          </CategoryContent>

        </AnimateHeight>

      </CategoryContainer>
    </>
  )
}
