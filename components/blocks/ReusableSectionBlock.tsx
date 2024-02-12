import { ReusableSectionsBlock } from '~/types'

import BlocksList from './BlocksList'

export default function ReusableSectionBlock({
  reusableSection
}: ReusableSectionsBlock): React.ReactElement {

  return (
    <>
      <BlocksList blocks={ reusableSection.blocks } />
    </>
  )
}
