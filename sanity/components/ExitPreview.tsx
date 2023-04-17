import {
  Button,
  Card,
  Flex,
  Inline,
  Stack,
  Switch,
  ThemeProvider,
  studioTheme,
  usePrefersDark,
} from '@sanity/ui'
import { LeaveIcon } from '@sanity/icons'
import { useState } from 'react'

// Render the exit preview UI
export default function ExitPreview() {
  const prefersDark = usePrefersDark()

  const [allowAnimations, setAllowAnimations] = useState(true)

  const toggleAnimations = () => setAllowAnimations(!allowAnimations)

  return (
    <ThemeProvider theme={studioTheme}>
      <Card
        shadow={ 2 }
        padding={ 2 }
        display='inline-block'
        scheme={ prefersDark ? 'dark' : 'light'}
        className='fixed bottom-gutter left-gutter'>
        <Stack space={ 2 }>

          <Button
            icon={ LeaveIcon }
            mode='ghost'
            text='Exit Preview' />

          <Flex align='center' justify='space-between'>
            Animations
            <Switch
              checked={ allowAnimations }
              onClick={ toggleAnimations } />
          </Flex>

        </Stack>
      </Card>
    </ThemeProvider>
  )
}
