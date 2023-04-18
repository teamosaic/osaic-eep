import {
  Card,
  Stack,
  ThemeProvider,
  studioTheme,
  usePrefersDark,
} from '@sanity/ui'
import styles from './previewControls.module.css'
import ExitPreview from './ExitPreview'
import DisableAnimations from './DisableAnimations'

// Container of preview controls
export default function PreviewControls(): React.ReactElement {

  // Read the user's dark settings
  const prefersDark = usePrefersDark()

  return (
    <ThemeProvider theme={studioTheme}>
      <Card
        shadow={ 2 }
        padding={ 2 }
        display='inline-block'
        scheme={ prefersDark ? 'dark' : 'light'}
        className={ styles.previewControls }>

        <Stack space={ 2 }>
          <ExitPreview/>
          <DisableAnimations/>
        </Stack>

      </Card>
    </ThemeProvider>
  )
}
