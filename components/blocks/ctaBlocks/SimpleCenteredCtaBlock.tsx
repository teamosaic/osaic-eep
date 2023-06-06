import { CtaBlock } from '~/types'
import AnimateInView from '~/packages/animate-in-view'
import BasePortableText from '~/packages/portable-text/BasePortableText'

export default function SimpleCenteredCtaBlock(
  { body }: CtaBlock
): React.ReactElement {
  return (
    <div className="
      max-w-screen-md mx-auto px-gutter
      text-center">

      {/* The main WYSIWYG text */}
      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <BasePortableText
          value={ body }
          className='prose-marketing' />
      </AnimateInView>

    </div>
  )
}
