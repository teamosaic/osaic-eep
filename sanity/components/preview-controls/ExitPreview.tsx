import { Button, } from '@sanity/ui'
import { LeaveIcon } from '@sanity/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Render the exit preview link
export default function ExitPreview(): React.ReactElement {

  // Setup state
  const [iframed, setIframed] = useState(undefined)
  const router = useRouter()

  // Detect if running in an iframe
  useEffect(() => {
    setIframed(window !== window.parent)
  }, [])

  // Don't render if we don't know if iframed or if we are iframed. If running
  // in the preview iframe, there is no need to leave preview
  if (iframed === undefined || iframed === true) return

  // Make the URL to exit
  const to = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`

  return (
    <a href={ to }>
      <Button
        icon={ LeaveIcon }
        mode='ghost'
        text='Exit Preview' />
    </a>
  )
}
