import type { ArticlesBlock } from '~/types'
import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import AnimateInView from '~/packages/animate-in-view'
import ArticleCard from '../global/cards/ArticleCard'

export default function ArticlesBlockComponent({
  headline, recentArticles,
}: ArticlesBlock): React.ReactElement {

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
            prose-marketing text-center' />
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
