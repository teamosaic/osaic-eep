import ButtonList from '~/components/global/buttons/ButtonList'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import { CtaBlock } from '~/types'

export default function SimpleJustifiedCtaBlock(
  { body, buttons }: CtaBlock
): React.ReactElement {
  return (
    <div className="
      max-w-screen-xl mx-auto px-gutter
      md:flex md:items-center md:justify-between">

      {/* The main WYSIWYG text */}
      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <MarketingPortableText value={ body }/>
      </AnimateInView>

      {/* List the buttons on the right edge */}
      { buttons?.length > 0 &&
        <AnimateInView
          className='animate-slide-left-in [animation-delay:0.5s]'>
          <ButtonList {...{ buttons }} className='
            pt-sm md:pt-0
            md:pl-gutter flex-shrink-0' />
        </AnimateInView>
      }

    </div>
  )
}
