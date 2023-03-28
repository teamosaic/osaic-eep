import { usePreview } from '../sanity/preview'
import Tower, { getTowerBySlug } from './Tower'

export default function PreviewTower({ previewToken, page }) {
	const { slug } = page
  const draftPage = usePreview(previewToken, getTowerBySlug, { slug })
  return <Tower page={ draftPage } />
}
