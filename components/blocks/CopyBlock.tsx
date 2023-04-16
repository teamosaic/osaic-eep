import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import { type CopyBlock as BlockType, TextAlignment } from '~/types'
import AnimateInView from '~/packages/animate-in-view'
import clsx from 'clsx'

export default function CopyBlock({ block }: {
  block: BlockType
}): React.ReactElement {

  return (
    <AnimateInView
      target='descendants'
      when='10%'
      className='prose-slide-up-in'>

      <BasicPortableText
        value={ block.body }
        className={clsx([
          'max-w-screen-lg mx-auto px-gutter',
          mapTextAlignmentToTailwindClass(block.textAlignment),
        ])} />

    </AnimateInView>
  )
}

function mapTextAlignmentToTailwindClass(
  textAlignment: TextAlignment
): string {
  switch(textAlignment) {
    case TextAlignment.Left: return 'text-left'
    case TextAlignment.Center: return 'text-center'
    case TextAlignment.Right: return 'text-right'
  }
}
