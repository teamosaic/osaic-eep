import { SettingsContext } from '~/providers/settings'
import LayoutHeader from '~/components/layout/Header'
import LayoutFooter from '~/components/layout/Footer'

export default function DefaultLayout({ settings, children }) {
  return (
    <SettingsContext.Provider value={ settings } >
      <>
        <LayoutHeader/>
        <main className='
          w-full min-h-full
          flex flex-col'>

          {/* Page content injected here */}
          { children }

          <LayoutFooter className='mt-auto'/>
        </main>
      </>
    </SettingsContext.Provider>
  )
}
