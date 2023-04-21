import SanityImage from '~/packages/sanity-image/SanityImage'
import AnimateInView from '~/packages/animate-in-view'
import BasicPortableText from '~/packages/portable-text/BasicPortableText'

// Based on
// https://tailwindui.com/components/marketing/sections/heroes#component-d63f5b5552a3f3d936c6ab970a47899b
export default function HeroBlock({ block }: {
  block: any
}): React.ReactElement {
  return (
    <div className="relative isolate overflow-hidden">

      {/* Background image */}
      { block.background &&
        <AnimateInView className='animate-slow-scale-down-in absolute inset-0'>
          <SanityImage
            expand
            priority
            sizes='100vw'
            source={ block.background } />
        </AnimateInView> }

      <UpperLeftDodgeEffect />
      <BottomRightDodgeEffect />


      <div className="
        relative
        max-w-screen-md mx-auto px-gutter
        py-32f md:py-56f">

        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-white">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="text-center text-white">

          {/* The main WYSIWYG text of the hero */}
          <AnimateInView
            target='descendants'
            className='prose-slide-up-in relative'>
            <BasicPortableText
              value={ block.body }
              className='prose-marquee' />
          </AnimateInView>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>


      </div>



    </div>
  )
}

function UpperLeftDodgeEffect() {
  return (
    <div
      className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  )
}

function BottomRightDodgeEffect() {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  )
}
