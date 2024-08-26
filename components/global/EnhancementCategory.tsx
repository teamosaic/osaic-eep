import { useEffect, useState } from "react";
import AnimateHeight from 'react-animate-height';

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

  return (
    <>
      <CategoryContainer key={key} visible={visible}>
        <CategoryHeading onClick={toggleVisibility}>
          <CategoryTitle title={category.title} />
          <CategoryPill count={category.blocks.length} />
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

            {category.blocks.map((enhancement, index) => (
              <EnhancementLink key={index}>
                <SmartLink href={`${category.uri.current}?section=${handleize(enhancement.enhancementTitle)}`}>
                  <span className="grow text-evergreen text-enhancement-title leading-enhancement-title font-marselis">{enhancement.enhancementTitle}</span>
                  <span className="icon-caret"></span>
                </SmartLink>
              </EnhancementLink>
            ))}
          </CategoryContent>

        </AnimateHeight>

      </CategoryContainer>
    </>
  )
}
