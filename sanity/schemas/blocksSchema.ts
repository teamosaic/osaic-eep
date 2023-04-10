import { SpacerHeights } from '~/components/blocks/SpacerBlock'
import { blockLayoutFields } from './shared/blockLayout'

// https://www.sanity.io/docs/previewing-block-content
function firstBlockText(blocks: any[]) {
  const block = (blocks || []).find(block => block._type === 'block')
  if (!block) return 'No title'
  return block.children
    .filter(child => child._type === 'span')
    .map(span => span.text)
    .join('')
}

const Heights = [
  { title: 'Small', value: SpacerHeights.Small },
  { title: 'Medium', value: SpacerHeights.Medium },
  { title: 'Large', value: SpacerHeights.Large },
]

export const marqueeBlock = {
  name: 'marqueeBlock',
  type: 'object',
  title: 'Marquee Block',
  groups: [
    { name: 'content', title: 'Content', default: true, },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    },
    {
      name: 'background',
      type: 'image',
      title: 'Background Image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'title',
          type: 'string',
          description: 'This will be used as the image alt attribute.'
        }
      ]
    },
    ...blockLayoutFields

  ],
  preview: {
    select: {
      body: 'body',
      background: 'background',
    },
    prepare({ body, background }) {
      return {
        title: firstBlockText(body),
        subtitle: 'Marquee',
        media: background,
      }
    }
  }
}


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
        list: Heights,
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
        title: (Heights.find(opt => opt.value == height ))?.title || 'Unknown',
        subtitle: 'Spacer'
      }
    }
  }
}
