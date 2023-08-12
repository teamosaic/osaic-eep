import SanityNextVisual, {
  type SanityNextVisualProps
} from '@react-visual/sanity-next'
import { useContext } from 'react'

import { BlockOrderContext } from '~/providers/blockOrder'

// Apply app-specific customizations to @react-visual/sanity-next
export default function SanityVisual(
  props: SanityNextVisualProps
): React.ReactElement | null {

  // Auto-set priority if the block's index is <= 1 (the first and 2nd blocks)
  const blockOrder = useContext(BlockOrderContext)
  const priority = props.priority || blockOrder.index <= 1

  // Render @react-visual/sanity-next
  return <SanityNextVisual {...{
    ...props,
    priority,
  }} />
}
