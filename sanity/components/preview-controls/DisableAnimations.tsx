import { Box, Flex, Switch } from '@sanity/ui'
import styles from './previewControls.module.css'
import useLocalStorageState from 'use-local-storage-state'
import { useEffect } from 'react'

// Toggle animations on and off
export default function DisableAnimations(): React.ReactElement {

  // Track the state of the animation toggle
  const [allowAnimations, setAllowAnimations] = useLocalStorageState(
    'exit-preview:allow-animations', { defaultValue: true })

  // Handle toggling the animation state
  const toggleAnimations = () => setAllowAnimations(!allowAnimations)

  // Control global animations state
  useEffect(() => {
    if (allowAnimations) {
      document.body.classList.remove(styles.disableAnimations)
    } else {
      document.body.classList.add(styles.disableAnimations)

      // Stop any animations in flight and remove them. Without this,
      // el.getAnimations() would continue to return animations, even if they
      // were `animation: none !important`
      document.getAnimations().forEach((animation: Animation) => {
        animation.cancel()
      })
    }
  }, [ allowAnimations ])

  return (
    <Flex align='center' justify='space-between'>
      <Box marginRight={ 2 }>Animations</Box>
      <Switch
        checked={ allowAnimations }
        onChange={ toggleAnimations } />
    </Flex>
  )
}
