import { getTowerBySlug } from '~/components/Tower'
import { usePreview } from '~/sanity/preview'

// Fetch preview data from Sanity and then pass it to child components
export default function PreviewLoader({ previewToken, uri, render }) {

  // Load draft data
  const page = usePreview(previewToken, getTowerBySlug, { slug: uri })
  const settings = usePreview(previewToken, `*[_type == 'settings'][0]`)

  // Pass draft data to children components
  return render({ page, settings })
}
