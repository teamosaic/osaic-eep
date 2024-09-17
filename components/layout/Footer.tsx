import { signOut } from "next-auth/react"
import React, { useContext } from 'react';

import MarketingPortableText from '~/components/global/portableText/MarketingPortableText';
import { SettingsContext } from '~/providers/settings';
import { Settings } from '~/types/globalTypes';


type FooterProps = {
  previewSite: string;
};


export default function Footer({ previewSite }: FooterProps) {

  const settingsContext = useContext<Settings>(SettingsContext);

  return (
    <footer className="
      bg-evergreen
      px-sm
      py-[100px]
      when-not-mobile:p-sm
      when-not-mobile:mt-0
      text-white
      -mt-[32px]
      relative
      z-[1]">

      <div className="absolute inset-0 z-1 bg-black/20"></div>

      <MarketingPortableText className="relative z-2" value={settingsContext.footer} />

      <button onClick={() => { signOut() }}>
        <span className="absolute inset-0" aria-hidden="true" />
        Log Out
      </button>


     {!!previewSite && (
        <>
          <button onClick={() => { signOut() }}>
            <span className="absolute inset-0" aria-hidden="true" />
            Log Out
          </button>
        </>
      )}
    </footer>
  )
}
