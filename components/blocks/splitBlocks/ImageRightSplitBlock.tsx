
import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import SanityImage from '~/packages/sanity-image'
import { SplitBlock as BlockType } from '~/types'

// Based on
// https://tailwindui.com/components/marketing/sections/cta-sections#component-58b6441d042e26470c2d485039ead146
export default function SplitBlock({
  body,
  image,
}: BlockType): React.ReactElement {
  return (
    <div className="relative bg-gray-900 max-w-7xl mx-auto rounded-none lg:rounded-md lg:overflow-hidden">

      {/* Image Column */}
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:top-0 md:right-0 md:h-full md:w-1/3 lg:w-1/2">

      { image &&
        <AnimateInView className='animate-slow-scale-down-in absolute inset-0'>
          <SanityImage
            className='h-full w-full object-cover'
            expand
            sizes='100vw'
            source={ image } />
        </AnimateInView> }

      </div>

      {/* Wysiwyg Column */}
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:mr-auto md:w-2/3 md:pr-16 lg:w-1/2 lg:pr-24 lg:pl-12 xl:pr-32">

          <AnimateInView
            target='descendants'
            className='prose-animate-in relative'>
            <MarketingPortableText value={ body } className='text-white text-center md:text-left' alignmentClasses='justify-start' />
          </AnimateInView>

        </div>
      </div>
    </div>
  )
}
