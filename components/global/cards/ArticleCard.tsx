import type { ArticleCard } from '~/types'
import SmartLink from '~/packages/smart-link/SmartLink'
import AnimateInView from '~/packages/animate-in-view'
import SanityImage from '~/packages/sanity-image'
import CategoryBadge from '../CategoryBadge'
import DateLabel from '../DateLabel'

// A card in the article listing
export default function ArticleCard({
  uri, title, date, excerpt, image,
  revealDelay, revealOnce, revealWhen = '10%',
}: ArticleCard & {
  revealDelay?: number
  revealOnce?: boolean
  revealWhen?: string
}): React.ReactElement {

  // Create reveal stagger
  const revealStaggerStyle = revealDelay ?
    { animationDelay: `${revealDelay}s` } : null

  // Stagger animate in
  return (
    <AnimateInView
      as='article'
      when={ revealWhen }
      once={ revealOnce }
      className='
        flex flex-col items-start
        animate-slide-up-in'
      style={ revealStaggerStyle }>

      {/* Make rounded container */}
      <SmartLink href={ uri }
        className="
          relative overflow-hidden
          aspect-[16/9] w-full
          rounded-2xl ring-1 ring-inset ring-gray-900/10">

        {/* Render image, scaling in when in viewport */}
        <AnimateInView
          when={ revealWhen }
          once={ revealOnce }
          className={`
            absolute inset-0
            animate-slow-scale-down-in`}>
          <SanityImage
            expand
            source={ image }
            sizes='(min-width: 1024px) 33vw, 100vw'
            className='
              hover:scale-110
              transition-transform
              ease-out-quint
              hover:duration-300 duration-700' />
        </AnimateInView>
      </SmartLink>

      <div className="max-w-md">

        {/* Time & Category */}
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <DateLabel date={ date } className='opacity-70' />
          <CategoryBadge name='Example Category'/>
        </div>

        {/* Title & description */}
        <div className="relative">
          <h4 className="mt-3 text-lg font-semibold leading-6">
            <SmartLink href={ uri } className='hover:opacity-70'>
              {title}
            </SmartLink>
          </h4>
          <p className="mt-5f line-clamp-3 text-sm leading-6 opacity-70">
            { excerpt }
          </p>
        </div>

      </div>
    </AnimateInView>
  )
}
