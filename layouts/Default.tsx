import { SettingsContext } from '~/lib/contexts'
import LayoutHeader from '~/components/Layout/Header'

export default function DefaultLayout({ settings, children }) {
  return (
    <SettingsContext.Provider value={ settings } >
      <>
        <LayoutHeader/>
        { children }
      </>
    </SettingsContext.Provider>
  )
}
