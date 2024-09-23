import React, { useState } from 'react';

import LayoutFooter from '~/components/layout/Footer'
import LayoutHeader from '~/components/layout/Header'
import { SettingsContext } from '~/providers/settings'
import type { Settings } from '~/types/globalTypes';

interface DefaultLayoutProps {
  settings: Settings;
  page: any;
  children: React.ReactNode;
  previewSite: string;
}


export default function DefaultLayout({ settings, page, children, previewSite }: DefaultLayoutProps) {

  const defaultTheme = {
    hex: '#333333'
  }

  const [isFooterInView, setIsFooterInView] = useState(false);

  const handleFooterInView = (inView: boolean) => {
    setIsFooterInView(inView);
  };

  return (
    <SettingsContext.Provider value={settings}>
      <>
        <LayoutHeader theme={page?.theme ? page.theme : defaultTheme} />
        <main className={`w-full min-h-full flex flex-col ${isFooterInView ? 'hide-title' : null}`}>
          {children}
        </main>

        <LayoutFooter
          onInViewChange={handleFooterInView}
          previewSite={previewSite} />
      </>
    </SettingsContext.Provider>
  );
}
