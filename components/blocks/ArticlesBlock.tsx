import {
  ArticlesBlock as ArticlesBlockType,
  ArticleCard as ArticleCardType,
} from '~/types'
import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import SmartLink from '~/packages/smart-link/SmartLink'
import AnimateInView from '~/packages/animate-in-view'

export default function ArticlesBlockComponent({
  headline, recentArticles,
}: ArticlesBlockType): React.ReactElement {

  // Require articles
  if (!recentArticles?.length) return

  return (
    <>

      {/* Render headline text */}
      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <BasicPortableText
          value={ headline }
          className='
            max-w-screen-md mx-auto px-gutter
            prose-marquee text-center' />
      </AnimateInView>

      {/* Render cards vis CSS grid */}
      <div className='
        mt-sm
        max-w-screen-sm mx-auto px-gutter
        grid grid-cols-1 gap-x-8 gap-y-20
        lg:max-w-screen-xl lg:grid-cols-3'>
        { recentArticles.map(ArticleCard) }
      </div>

    </>
  )
}

// A card in the article listing
function ArticleCard({
  _id, uri, title, date, excerpt,
}: ArticleCardType): React.ReactElement {

  const dateObj = new Date(date)

  return (
    <article key={ _id } className="flex flex-col items-start">

      {/* Image */}
      <SmartLink href={ uri } className="relative w-full">
        <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover  opacity-10" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </SmartLink>

      <div className="max-w-md">

        {/* Time & Category */}
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={ dateObj.toISOString() } className="opacity-70">
            { dateObj.toLocaleDateString('en-US', { dateStyle: 'medium' }) }
          </time>
          <a
            href='#'
            className="
            rounded-full px-3 py-1.5
            bg-white/80 hover:bg-white">
            <span className='opacity-70 font-medium'>Example Category</span>
          </a>
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
    </article>
  )
}
