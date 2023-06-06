import AnimateInView from '~/packages/animate-in-view'
import ArticleCard from '~/components/global/cards/ArticleCard'
import BasePortableText from '~/packages/portable-text/BasePortableText'
import PrimaryButton from '~/components/global/buttons/PrimaryButton'
import { ArticlesBlock, ButtonIcon } from '~/types'

export default function ArticlesBlock({
  headline, recentArticles, totalArticles
}: ArticlesBlock): React.ReactElement {

  // Require articles
  if (!recentArticles?.length) return

  return (
    <>

      {/* Render headline text */}
      <AnimateInView
        target='descendants'
        className='prose-animate-in'>
        <BasePortableText
          value={ headline }
          className='
            max-w-screen-md mx-auto px-gutter
            prose-marketing text-center' />
      </AnimateInView>

      {/* Render cards vis CSS grid */}
      <div className='
        mt-sm
        max-w-screen-sm mx-auto px-gutter
        grid grid-cols-1 gap-x-xs gap-y-md
        lg:max-w-screen-xl lg:grid-cols-3'>
        { recentArticles.map((article, index) => (
          <ArticleCard
            key={article._id}
            revealDelay={ index * 0.2 }
            {...article } />
        )) }
      </div>

      {/* Show view all link */}
      { totalArticles > recentArticles.length && (
        <div className='flex place-content-center my-md'>
          <PrimaryButton url='/articles' icon={ ButtonIcon.RightArrow }>
            View all
          </PrimaryButton>
        </div>
      ) }

    </>
  )
}
