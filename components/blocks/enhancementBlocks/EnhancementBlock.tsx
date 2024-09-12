
import { EEPButton } from '~/components/global/EEPButton'
import { EnhancementBlock } from '~/types'

import { EBBody,EBDate, EBImage, EBTitle, EBWrap } from './EBComponents'

export default function Simple({
  enhancementTitle,
  image,
  ctaText,
  ctaUrl,
  body,
  date
}: EnhancementBlock
): React.ReactElement {
  return (
    <EBWrap title={enhancementTitle}>

      <EBImage image={image} />
      { date ? (
        <EBDate date={date} />
      ) : null }

      <EBTitle label={enhancementTitle} />
      <EBBody body={body} />

      { ctaUrl ? (
        <div className="mt-4">
          <EEPButton
            href={ctaUrl}
            label={ctaText} />
        </div>
      ) : null }

    </EBWrap>
  )
}
