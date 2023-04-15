import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import type { CopyBlock as BlockType } from '~/types'
import AnimateInView from '~/packages/animate-in-view'

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
        className='max-w-screen-lg mx-auto px-gutter' />

    </AnimateInView>
  )
}
