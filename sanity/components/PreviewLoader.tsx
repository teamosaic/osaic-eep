import { usePreview } from '~/sanity/preview'

// Fetch preview data from Sanity and then pass it to child components
export default function PreviewLoader({ previewToken, query, params, render }) {

  // Load draft data
  const page = usePreview(previewToken, query, params)
  const settings = usePreview(previewToken, `*[_type == 'settings'][0]`)

  // Pass draft data to children components
  return render({ page, settings })
}
