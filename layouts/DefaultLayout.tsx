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
          <div className={clsx('mt-auto', {
            'pt-large': needsSpaceAboveFooter(page)
          })}>
            <LayoutFooter/>
          </div>

        </main>
      </>
    </SettingsContext.Provider>
  )
}

// The header overlaps the page if it has blocks and the first block is a hero
function doesHeaderOverlap(page): boolean {
  return 'blocks' in page && page.blocks?.[0]?._type == 'heroBlock'
}

// Add space above the footer unless the last block has a background
function needsSpaceAboveFooter(page): boolean {
  if (!('blocks' in page && page.blocks)) return true
  const lastBlock = page.blocks[page.blocks.length - 1]
  return !lastBlock.backgroundColor
}
