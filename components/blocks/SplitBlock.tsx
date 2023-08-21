
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import { SplitBlock as BlockType, SplitBlockOrientation } from '~/types'

import SanityVisual from '../global/SanityVisual'

// Based on
// https://tailwindui.com/components/marketing/sections/cta-sections#component-58b6441d042e26470c2d485039ead146
export default function SplitBlock({
  orientation,
  body,
  media,
}: BlockType): React.ReactElement {

  return (
    <div className="relative max-w-7xl mx-auto lg:overflow-hidden">

      {/* Image Column */}
      <div className={`
        relative h-80 md:h-full overflow-hidden md:absolute
        md:w-1/3 lg:w-1/2
        ${orientation == SplitBlockOrientation.TextRight ?
          'md:left-0' :
          'md:top-0 md:right-0'
        }`}>

        {/* Visual asset */}
        { media &&
          <AnimateInView className='animate-slow-scale-down-in absolute inset-0'>
            <SanityVisual
              expand
              sizes='(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 100vw'
              src={ media } />
          </AnimateInView> }

      </div>

      {/* Copy Column */}
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className={`
          pl-6 pr-6
          md:w-2/3 lg:w-1/2
          ${orientation == SplitBlockOrientation.TextRight ?
            'md:ml-auto md:pl-16 lg:pl-24 lg:pr-12 xl:pl-32' :
            'md:mr-auto md:pr-16 lg:pr-24 lg:pl-12 xl:pr-32'
          }`}>

          {/* The Copy */}
          <AnimateInView
            target='descendants'
            className='prose-animate-in relative'>
            <MarketingPortableText
              value={ body }
              className='text-center md:text-left' />
          </AnimateInView>

        </div>
      </div>
    </div>
  )
}
