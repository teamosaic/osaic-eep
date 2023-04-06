import { PreviewSuspense } from 'next-sanity/preview'
import dynamic from 'next/dynamic'

const PreviewLoader = dynamic(() => import('~/sanity/components/PreviewLoader'))

export default function PagePreview({
  previewToken,
  uri,
  children: renderChildren
}) {
  return (
    <PreviewSuspense fallback={ <Placeholder /> }>
      <PreviewLoader {...{ previewToken, uri, renderChildren }} />
    </PreviewSuspense>
  )
}

function Placeholder() {
  return (
    <div className='p-8'>Loading preview...</div>
  )
}
