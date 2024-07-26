import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import { CtaBlock } from '~/types'

export default function SimpleCenteredCtaBlock(
  { body }: CtaBlock
): React.ReactElement {
  return (
    <div className="max-w-screen-md mx-auto px-gutter">

      {/* The main WYSIWYG text */}
      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <MarketingPortableText value={ body } className='text-center'/>
      </AnimateInView>

    </div>
  )
}
