import { SettingsContext } from '~/providers/settings'
import LayoutHeader from '~/components/layout/Header'

export default function DefaultLayout({ settings, children }) {
  return (
    <SettingsContext.Provider value={ settings } >
      <>
        <LayoutHeader/>
        <main>
          { children }
        </main>
      </>
    </SettingsContext.Provider>
  )
}
