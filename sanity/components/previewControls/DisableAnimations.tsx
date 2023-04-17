import { Flex, Switch } from '@sanity/ui'
import styles from './previewControls.module.css'
import useLocalStorageState from 'use-local-storage-state'
import { useEffect } from 'react'

// Toggle animations on and off
export default function DisableAnimations(): React.ReactElement {

  // Track the state of the animation toggle
  const [allowAnimations, setAllowAnimations] = useLocalStorageState(
    'exit-preview:allow-animations', { defaultValue: true })

  // Handle goggling the animation state
  const toggleAnimations = () => setAllowAnimations(!allowAnimations)

  // Control global animations state
  useEffect(() => {
    if (allowAnimations) {
      document.body.classList.remove(styles.disableAnimations)
    } else {
      document.body.classList.add(styles.disableAnimations)
    }
  })

  return (
    <Flex align='center' justify='space-between'>
      Animations
      <Switch
        checked={ allowAnimations }
        onChange={ toggleAnimations } />
    </Flex>
  )
}
