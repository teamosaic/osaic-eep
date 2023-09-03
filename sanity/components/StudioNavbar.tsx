import { Card, Stack, Text } from '@sanity/ui'
import { NavbarProps, useWorkspace } from 'sanity'

export default function StudioNavbar(props: NavbarProps) {
  const {dataset} = useWorkspace()
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProdDataset = dataset.includes('prod')

  return (
    <Stack>
      {isDevelopment && isProdDataset && (
        <Card padding={3} tone={"critical"}>
          <Text size={2}>
            Using the <b>{dataset}</b> dataset
          </Text>
        </Card>
      )}

      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  )
}
