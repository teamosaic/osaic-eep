import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { EEPButton } from '~/components/global/EEPButton'
import { EnhancementBlock } from '~/types'

import { EBBody,EBDate, EBImage, EBTitle, EBTooltip, EBWrap } from './EBComponents'

export default function Simple({
  enhancementTitle,
  tooltip,
  image,
  ctaText,
  ctaUrl,
  body,
  date
}: EnhancementBlock
): React.ReactElement {

  const { data: session, status, update } = useSession()
  const [isHO, setIsHO] = useState(false)

  useEffect(() => {
    if (!(status=='authenticated')) return
    setIsHO(session?.user?.attributes?.UserType[0] == 'HO')
  }, [status, session])

  return (
    <EBWrap title={enhancementTitle}>

      <EBImage image={image} />

      <div className="flex items-center mb-4">

        { tooltip && isHO ? (
          <EBTooltip body={tooltip} />
        ) : null }

        { date ? (
          <EBDate date={date} />
        ) : null }
      </div>


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
