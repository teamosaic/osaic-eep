import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import {
  type CopyBlock as BlockType,
  TextAlignment,
  TypographyThemes,
} from '~/types'
import AnimateInView from '~/packages/animate-in-view'
import clsx from 'clsx'
import { mapOption } from '~/lib/helpers'

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
          mapOption(block.textAlignment, {
            [TextAlignment.Left]: 'text-left',
            [TextAlignment.Center]: 'text-center',
            [TextAlignment.Right]: 'text-right',
          }),
          mapOption(block.typographyTheme, {
            [TypographyThemes.Article]: 'prose-article',
          }),
        ])} />

    </AnimateInView>
  )
}
