import LayoutHeader from '~/components/layout/Header'
import { SettingsContext } from '~/providers/settings'
import type { Settings } from '~/types/globalTypes';

interface DefaultLayoutProps {
  settings: Settings;
  page: any;
  children: React.ReactNode;
}

export default function DefaultLayout({ settings, page, children }: DefaultLayoutProps) {

  const defaultTheme = {
    hex: '#333333'
  }

  return (
    <SettingsContext.Provider value={settings}>
      <>
        <LayoutHeader theme={page?.theme ? page.theme : defaultTheme} />
        <main className="w-full min-h-full flex flex-col">
          {children}
        </main>
      </>
    </SettingsContext.Provider>
  );
}
