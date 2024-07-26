import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import { EnhancementBlock } from '~/types'

export default function Rich(
  { body }: EnhancementBlock
): React.ReactElement {
  return (
    <div className="
      max-w-screen-xl mx-auto px-gutter
      md:flex md:items-center md:justify-between">

      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <MarketingPortableText value={ body }/>
      </AnimateInView>

    </div>
  )
}
