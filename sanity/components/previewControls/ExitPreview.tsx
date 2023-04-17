import { Button, } from '@sanity/ui'
import { LeaveIcon } from '@sanity/icons'
import { useEffect, useState } from 'react'

// Render the exit preview link
export default function ExitPreview(): React.ReactElement {

  // Track iframed detection
  const [iframed, setIframed] = useState(undefined)

  // Detect if running in an iframe
  useEffect(() => {
    setIframed(window !== window.parent)
  })

  // Don't render if we don't know if iframed or if we are iframed. If running
  // in the preview iframe, there is no need to leave preview
  if (iframed === undefined || iframed === true) return

  return (
    <a href='/api/exit-preview'>
      <Button
        icon={ LeaveIcon }
        mode='ghost'
        text='Exit Preview' />
    </a>
  )
}
