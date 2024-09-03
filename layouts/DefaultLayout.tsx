import type { Settings } from '~/types/globalTypes';
import { SettingsContext } from '~/providers/settings'
import LayoutHeader from '~/components/layout/Header'

interface DefaultLayoutProps {
  settings: Settings;
  page: any;
  children: React.ReactNode;
}

export default function DefaultLayout({ settings, page, children }: DefaultLayoutProps) {
  return (
    <SettingsContext.Provider value={settings}>
      <>
        <LayoutHeader theme={page.theme} />
        <main className="w-full min-h-full flex flex-col">
          {children}
        </main>
      </>
    </SettingsContext.Provider>
  );
}
