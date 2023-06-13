import { SettingsContext } from '~/providers/settings'
import LayoutHeader from '~/components/layout/Header'
import LayoutFooter from '~/components/layout/Footer'
import clsx from 'clsx'

export default function DefaultLayout({ settings, page, children }) {
  return (
    <SettingsContext.Provider value={ settings } >
      <>
        <LayoutHeader overlap={ doesHeaderOverlap(page) } />

        {/* Create flex container so footer can be positioned at bottom */}
        <main className='w-full min-h-full flex flex-col'>

          {/* Page content injected here */}
          { children }

          {/* Position footer at the bottom of short pages */}
          <LayoutFooter className='mt-auto'/>

        </main>
      </>
    </SettingsContext.Provider>
  )
}

// The header overlaps the page if it has blocks and the first block is a hero
function doesHeaderOverlap(page): boolean {
  return 'blocks' in page && page.blocks?.[0]?._type == 'heroBlock'
}
