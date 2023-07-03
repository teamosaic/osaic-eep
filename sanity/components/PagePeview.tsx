import dynamic from 'next/dynamic'

import PreviewProvider from './PreviewProvider'

// Load on demand so it's deps are not bundled when not previewing
const PreviewLoader = dynamic(() => import('~/sanity/components/PreviewLoader'))

export default function PagePreview({
  initialData, previewToken, query, params, render
}) {
  return (
    <PreviewProvider token={ previewToken }>
      <PreviewLoader {...{ initialData, query, params, render }} />
    </PreviewProvider>
  )
}

