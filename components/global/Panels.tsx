import { isDark } from '@bkwld/light-or-dark';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import garnishDark from '~/assets/images/garnish-dark.png';
import garnishLight from '~/assets/images/garnish-light.png';
import { PageColorTheme } from '~/types/objectTypes';

type PanelWrapProps = {
  children: React.ReactNode;
};
export function PanelWrap({
  children,
}: PanelWrapProps): React.ReactElement {


  return (
    <>
      <div className="when-not-mobile:flex">
        {children}
      </div>

      <div className="when-not-mobile:hidden bg-white h-[32px] w-full block relative z-[3] rounded-b-large"></div>

    </>
  );
}

type PanelLeftProps = {
  children: React.ReactNode;
  theme?: PageColorTheme;
  noGarnish?: boolean;
  enableOverlay?: boolean;
};
export function PanelLeft({
  children,
  theme,
  noGarnish
}: PanelLeftProps): React.ReactElement {

  return (
    <div className={classNames(
      'when-not-mobile:sticky when-not-mobile:w-home-panel',
      'when-not-mobile:flex-nowrap when-not-mobile:h-[100vh]',
      'relative w-full h-[80vh] when-not-mobile:flex',
      'when-not-mobile:flex-wrap top-0 left-0 overflow-hidden',
      'bg-black flex shrink-0 items-end when-ultrawide:w-[50%]',
        {
          'text-evergreen': theme,
          'text-white': !theme || theme.hex == '#15535e',
        }
      )}
      style={theme ? { backgroundColor: theme.hex } : undefined}
    >

      {/* garnish */}
      { noGarnish ? null : (
        <>
          {isDark(theme.hex) ? (
            <Image className="absolute top-0 right-0 w-full" src={garnishDark} alt="" />
          ) : (
            <Image className="absolute top-0 right-0 w-full" src={garnishLight} alt="" />
          )}
        </>
      )}

      <div>
        {children}
      </div>

    </div>
  );
}

type PanelRightProps = {
  children: React.ReactNode;
};
export function PanelRight({
  children,
}: PanelRightProps): React.ReactElement {
  return (
    <div className="
      relative
      grow
      bg-white
      rounded-large
      -mt-[32px]
      when-not-mobile:rounded-0
      when-not-mobile:mt-0
      when-not-mobile:min-h-[100vh]">
      {children}
    </div>
  );
}

type PanelRightContentProps = {
  children: React.ReactNode;
};
export function PanelRightContent({
  children,
}: PanelRightContentProps): React.ReactElement {
  return (
    <div className="
      when-not-mobile:max-w-[750px]
      when-not-mobile:mx-auto
      when-not-mobile:mt-xs
      when-not-mobile:
      px-sm
      py-md
      rounded-large
      when-not-mobile:p-sm
      relative
      z-[2]">
      {children}
    </div>
  );
}

type PanelTitleProps = {
  title: string;
};
export function PanelTitle({
  title,
}: PanelTitleProps): React.ReactElement {
  return (
    <h1 className="
      left-panel-title
      transition
      font-marselis
      relative
      z-2
      px-gutter
      pb-gutter
      pt-[20px]
      text-home-heading
      leading-home-heading
      font-[400]
      lg:font-[350]
      max-w-[500px]
      pb-[100px]
      when-not-mobile:max-w-[800px]
      when-not-mobile:pb-sm

    ">{title}</h1>
  );
}
