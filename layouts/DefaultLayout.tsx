import clsx from 'clsx'

import {
  hasBackground,
  spacingToPaddingTop} from '~/components/blocks/BlockParent'
import LayoutHeader from '~/components/layout/Header'
import { SettingsContext } from '~/providers/settings'

export default function DefaultLayout({ settings, page, children }) {
  return (
    <SettingsContext.Provider value={ settings } >
      <>
        <LayoutHeader />

        {/* Create flex container so footer can be positioned at bottom */}
        <main className='w-full min-h-full flex flex-col'>

          {/* Page content injected here */}
          { children }

          {/* Position footer at the bottom of short pages */}
          <div className={clsx('mt-auto',
            addSpaceAboveFooter(page)
          )}>
          </div>

        </main>
      </>
    </SettingsContext.Provider>
  )
}

// Add space above the footer unless the last block has a background
function addSpaceAboveFooter(page): string {

  // If no blocks, do nothing
  const blocks = (('footerBlocks' in page && page.footerBlocks) ||
    ('blocks' in page && page.blocks) || []
  ).filter(block => !block?.disabled) // Remove disabled blocks
  if (!blocks?.length) return

  // If it has a background, assume it has padding inside already
  const lastBlock = blocks[blocks.length - 1]
  if (hasBackground(lastBlock)) return

  // Use the block spacing value as the padding above the footer
  return spacingToPaddingTop(lastBlock.blockSpacing)
}
