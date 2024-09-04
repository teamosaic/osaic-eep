import React from 'react';
import SanityVisual from '~/components/global/SanityVisual'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText';
import { handleize } from '~/lib/helpers'
import type { Visual } from '~/types'

type EBWrapProps = { title: string; children: React.ReactNode };
export function EBWrap({ title, children }: EBWrapProps): React.ReactElement {

  return (
    <div className="relative mt-md mb-lg" id={handleize(title)}>
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
          mb-4
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
