import React, { useContext } from 'react';
import classNames from 'classnames';
import { PageColorTheme } from '~/types/objectTypes';
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText';
import { SettingsContext } from '~/providers/settings';
import { Settings } from '~/types/globalTypes';
import { isDark } from '@bkwld/light-or-dark';
import Image from 'next/image';
import garnishLight from '~/assets/images/garnish-light.png';
import garnishDark from '~/assets/images/garnish-dark.png';

type PanelWrapProps = {
  children: React.ReactNode;
};
export function PanelWrap({
  children,
}: PanelWrapProps): React.ReactElement {

  const settingsContext = useContext<Settings>(SettingsContext);

  return (
    <>
      <div className="when-not-mobile:flex">
        {children}
      </div>

      <div className="when-not-mobile:hidden bg-white h-[32px] w-full block relative z-[3] rounded-b-large"></div>

      {/* footer */}
      <div
        className="
          bg-evergreen
          px-sm
          py-[100px]
          when-not-mobile:p-sm
          when-not-mobile:mt-0
          text-white
          -mt-[32px]
          relative
          z-[1]"
        >
        <div className="absolute inset-0 z-1 bg-black/20"></div>
        <MarketingPortableText className="relative z-2" value={settingsContext.footer} />
      </div>
    </>
  );
}

type PanelLeftProps = {
  children: React.ReactNode;
  theme?: PageColorTheme;
  noGarnish?: boolean
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
      'bg-black flex shrink-0 items-end',
        {
          'text-evergreen': theme,
          'text-white': !theme || theme.hex == '#15535e',
        }
      )}
      style={theme ? { backgroundColor: theme.hex } : undefined}
    >
      {!theme ? (
        <div className="bg-black/50 absolute inset-0 z-1"></div>
      ) : null}

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

      <div className="">
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
      font-marselis
      relative
      z-2
      p-gutter
      text-home-heading
      leading-home-heading
      font-[400]
      lg:font-[350]
      max-w-[500px]
      pb-[100px]
      when-not-mobile:max-w-full
      when-not-mobile:pb-sm
    ">{title}</h1>
  );
}
