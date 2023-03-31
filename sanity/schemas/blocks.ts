import { SpacerHeights } from '~/components/Blocks/SpacerBlock'

// https://www.sanity.io/docs/previewing-block-content
function firstBlockText(blocks: any[]) {
  const block = (blocks || []).find(block => block._type === 'block')
  if (!block) return 'No title'
  return block.children
    .filter(child => child._type === 'span')
    .map(span => span.text)
    .join('')
}

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
  preview: {
    select: {
      body: 'body',
    },
    prepare({ body }) {
      return {
        title: firstBlockText(body),
        subtitle: 'Marquee'
      }
    }
  }
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
      height: 'height',
    },
    prepare({ height }) {
      return {
        title: (HEIGHTS.find(opt => opt.value == height ))?.title || 'Unknown',
        subtitle: 'Spacer'
      }
    }
  }
}
