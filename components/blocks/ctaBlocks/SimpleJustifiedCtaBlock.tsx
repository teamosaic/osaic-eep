import { CtaBlock } from '~/types'
import AnimateInView from '~/packages/animate-in-view'
import ButtonList from '~/components/global/buttons/ButtonList'
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'

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
            pt-sm justify-start
            md:pt-0 md:pl-gutter md:justify-center flex-shrink-0' />
        </AnimateInView>
      }

    </div>
  )
}
