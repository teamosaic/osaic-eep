import { Card, Stack, Text } from '@sanity/ui'
import { NavbarProps, useWorkspace } from 'sanity'

export default function StudioNavbar(props: NavbarProps) {
  const {dataset} = useWorkspace()
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProdDataset = dataset.includes('prod')

  return (
    <Stack>
      {isDevelopment && isProdDataset && (
        <Card paddingX={4} paddingY={3} tone={"caution"}>
          <Text size={2}>
            Using the <b style={{textTransform:'capitalize'}}>{dataset}</b> dataset
          </Text>
        </Card>
      )}

      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  )
}
