import SanityNextVisual, {
  type SanityNextVisualProps
} from '@react-visual/sanity-next'

// Apply app-specific customizations to @react-visual/sanity-next
export default function SanityVisual(
  props: SanityNextVisualProps
): React.ReactElement | null {

  return <SanityNextVisual {...{
    ...props,
  }} />

}
