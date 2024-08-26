import { useEffect, useState } from "react";
import AnimateHeight from 'react-animate-height';

import Caret from '~/components/global/Caret'
import {
  CategoryContainer,
  CategoryContent,
  CategoryHeading,
  CategoryPill,
  CategoryTitle } from '~/components/global/Category'
import { EnhancementLink } from '~/components/global/Enhancement'
import { handleize } from '~/lib/helpers'
import SmartLink from '~/packages/smart-link/SmartLink'
import { EnhancementCategoryInterface } from '~/types'

interface EnhancementCategoryProps extends EnhancementCategoryInterface {
  isVisible: boolean;
  onVisibilityChange: () => void;
}

export default function EnhancementCategory({ category, key, isVisible, onVisibilityChange }: EnhancementCategoryProps) {
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
      <CategoryContainer key={key} visible={visible}>
        <CategoryHeading onClick={toggleVisibility}>
          <CategoryTitle title={category.title} />
          <CategoryPill visible={visible} count={category.blocks.length} />
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
              <SmartLink key={index} href={`${category.uri.current}?section=${handleize(enhancement.enhancementTitle)}`}>
                <EnhancementLink theme={enhancement.cardTheme}>
                  <span className="block grow">
                    <span className="w-full md:w-3/4 block text-enhancement-title leading-enhancement-title font-marselis">{enhancement.enhancementTitle}</span>
                  </span>
                  <Caret theme={enhancement.cardTheme} />
                </EnhancementLink>
              </SmartLink>
            ))}

            {nonFeaturedEnhancementsExist && (
              <SmartLink href={category.uri.current}
                className="block text-center mt-xs p-2 text-evergreen underline uppercase font-marselis">
                View Past Updates
              </SmartLink>
            )}

          </CategoryContent>

        </AnimateHeight>

      </CategoryContainer>
    </>
  )
}
