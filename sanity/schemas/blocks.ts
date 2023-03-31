import { SpacerHeights } from '~/components/Blocks/SpacerBlock'

export const marqueeBlock = {
  name: 'marqueeBlock',
  type: 'object',
  title: 'Marquee Block',
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
}

const HEIGHTS = [
  { title: 'Small', value: SpacerHeights.Small },
  { title: 'Medium', value: SpacerHeights.Medium },
  { title: 'Large', value: SpacerHeights.Large },
]

export const spacerBlock = {
  name: 'spacerBlock',
  type: 'object',
  title: 'Spacer Block',
  fields: [
    {
      name: 'height',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: HEIGHTS,
        layout: 'radio'
      }

    }
  ],
  preview: {
    select: {
      title: 'height',
    },
    prepare({ title }) {
      return {
        title: (HEIGHTS.find(opt => opt.value == title ))?.title || 'Unknown',
        subtitle: 'Spacer'
      }
    }
  }
}
