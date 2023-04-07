import { PreviewSuspense } from 'next-sanity/preview'
import dynamic from 'next/dynamic'

// Load on demand so it's deps are not bundled when not previewing
const PreviewLoader = dynamic(() => import('~/sanity/components/PreviewLoader'))

export default function PagePreview({ previewToken, uri, render }) {
  return (
    <PreviewSuspense fallback={ <Placeholder /> }>
      <PreviewLoader {...{ previewToken, uri, render }} />
    </PreviewSuspense>
  )
}

function Placeholder() {
  return (
    <div className='p-8'>Loading preview...</div>
  )
}
