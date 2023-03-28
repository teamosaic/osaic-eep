import { usePreview } from '../sanity/preview'
import Tower, { query } from './Tower'

export default function PreviewDocumentsCount({ previewToken, page }) {
  const draftPage = usePreview(previewToken, query)
  return <Tower page={ draftPage } />
}
