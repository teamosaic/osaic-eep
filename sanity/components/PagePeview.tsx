import dynamic from 'next/dynamic'

import PreviewProvider from './PreviewProvider'

// Load on demand so it's deps are not bundled when not previewing
const PreviewPlaceholder = dynamic(() => import('~/sanity/components/PreviewPlaceholder'))

export default function PagePreview({ previewToken, query, params, render }) {
  return (
    <PreviewProvider token={ previewToken }>
      <PreviewPlaceholder {...{ query, params, render }} />
    </PreviewProvider>
  )
}

