import {
  Button,
  Card,
  Flex,
  Stack,
  Switch,
  ThemeProvider,
  studioTheme,
  usePrefersDark,
} from '@sanity/ui'
import styles from './sanityComponents.module.css'
import { LeaveIcon } from '@sanity/icons'
import useLocalStorageState from 'use-local-storage-state'

// Render the exit preview UI
export default function ExitPreview() {

  // Read the user's dark settings
  const prefersDark = usePrefersDark()

  // Track the state of the animation toggle
  const [allowAnimations, setAllowAnimations] = useLocalStorageState(
    'exit-preview:allow-animations', { defaultValue: true })

  // Handle goggling the animation state
  const toggleAnimations = () => setAllowAnimations(!allowAnimations)

  // Control global animations state
  if (allowAnimations) {
    document.body.classList.remove(styles.disableAnimations)
  } else {
    document.body.classList.add(styles.disableAnimations)
  }

  return (
    <ThemeProvider theme={studioTheme}>
      <Card
        shadow={ 2 }
        padding={ 2 }
        display='inline-block'
        scheme={ prefersDark ? 'dark' : 'light'}
        className={ styles.exitPreview }>
        <Stack space={ 2 }>

          <Button
            icon={ LeaveIcon }
            mode='ghost'
            text='Exit Preview' />

          <Flex align='center' justify='space-between'>
            Animations
            <Switch
              checked={ allowAnimations }
              onChange={ toggleAnimations } />
          </Flex>

        </Stack>
      </Card>
    </ThemeProvider>
  )
}
