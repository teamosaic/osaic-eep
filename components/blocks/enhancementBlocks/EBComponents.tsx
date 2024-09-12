import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from "react";

import tooltipTrigger from '~/assets/images/tooltip.svg';
import tooltipArrow from '~/assets/images/tooltip-arrow.svg';
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText';
import SanityVisual from '~/components/global/SanityVisual'
import { handleize } from '~/lib/helpers'
import type { Visual } from '~/types'


type EBWrapProps = { title: string; children: React.ReactNode };
export function EBWrap({ title, children }: EBWrapProps): React.ReactElement {

  return (
    <div className="relative pt-lg pb-sm" id={handleize(title)}>
      {children}
    </div>
  );
}


type EBTitleProps = { label: string };
export function EBTitle({ label }: EBTitleProps): React.ReactElement {
  return (
    <>
      <h5 className="style-h5 text-evergreen">{label}</h5>
    </>
  );
}

type EBImageProps = { image: Visual };
export function EBImage({ image }: EBImageProps): React.ReactElement {
  return (
    <>
      <SanityVisual
        className="
          block-image
          mb-xxs
          overflow-hidden
          rounded-[24px]"
        sizes='50vw'
        src={ image } />
    </>
  );
}


type EBDateProps = { date: string };
export function EBDate({ date }: EBDateProps): React.ReactElement {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <p
        className="
          text-ada-bitter-sweet
          font-bold font-marselis
        ">
        {formattedDate}
      </p>
    </>
  );
}



type EBBodyProps = { body: any };
export function EBBody({ body }: EBBodyProps): React.ReactElement {
  return (
    <>
      <MarketingPortableText
        className="relative z-2"
        value={body}
      />
    </>
  );
}



type EBTooltipProps = { body: any };
export function EBTooltip({ body }: EBTooltipProps): React.ReactElement {

  const [hovered, setHovered] = useState(false);

  const enableHovered = () => {
    setHovered(true);
  }

  const disableHovered = () => {
    setHovered(false);
  }

  return (
    <>

      <div className="relative mr-4">
        {/* trigger */}
        <Image
          className="relative cursor-pointer"
          src={tooltipTrigger}
          alt=""
          onMouseEnter={enableHovered}
          onMouseLeave={disableHovered} />

        {/* tooltip */}
        <div className={classNames(
          "duration-700 transition absolute w-[400px] bg-evergreen text-white p-5 rounded-tl-[8px] rounded-tr-[8px] ml-3 rounded-br-[8px] bottom-[70px]",
          {
            "opacity-0 invisible -translate-y-3": !hovered,
            "opacity-1 visible translate-y-0": hovered,
          })}>

          <MarketingPortableText
            className="relative z-2"
            value={body}
          />

          <Image className="absolute -bottom-[20px] left-0" src={tooltipArrow} alt="" />

        </div>


      </div>
    </>
  );
}
