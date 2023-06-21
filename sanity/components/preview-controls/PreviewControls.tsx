import {
  Card,
  Stack,
  studioTheme,
  ThemeProvider,
  usePrefersDark,
} from '@sanity/ui'

import DisableAnimations from './DisableAnimations'
import ExitPreview from './ExitPreview'
import styles from './previewControls.module.css'

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
