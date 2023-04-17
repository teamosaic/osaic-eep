import { Button, } from '@sanity/ui'
import { LeaveIcon } from '@sanity/icons'
import { useEffect } from 'react'

// Render the exit preview link
export default function ExitPreview(): React.ReactElement {

  // Detect if running in an iframe.  If not in the preview iframe, no need
  // to show option to exit preview
  // const iframed = window !== window.parent

  return (
    <a href='/api/exit-preview'>
      <Button
        icon={ LeaveIcon }
        mode='ghost'
        text='Exit Preview' />
    </a>
  )
}
