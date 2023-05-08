import ArticleCard from '~/components/global/cards/ArticleCard'
import { ArticleCard as IArticleCard, Button } from '~/types'
import PrimaryButton from '~/components/global/buttons/PrimaryButton'
import { memo, useState } from 'react'
import { client } from '~/sanity/client'
import { getMoreArticles } from '~/queries/articlesIndexQueries'

// Make a memoized card so the card animations don't replay (and the card
// doesn't render) when adding more cards via loadMore
const MemoizedArticleCard = memo(ArticleCard)

// Render the list of articles
export default function ArticleListing({
  initialArticles,
  totalArticles,
}: {
  initialArticles: IArticleCard[],
  totalArticles: number,
}): React.ReactElement {

  // Additional pages of articles are stored here
  const [ articles, setArticles ] = useState<IArticleCard[]>(initialArticles)
  const [ loading, setLoading ] = useState<boolean>(false)

  // Show no results message
  if (!articles.length) {
    return <div className='my-lg text-center'>No results found</div>
  }

  // Figure out how many more articles need loading
  const remainingCount = totalArticles - articles.length

  // Fetch an additional page of articles on click
  const loadMore = async () => {

    // Set loading state
    if (loading) return
    setLoading(true)

    // Fetch more results
    const lastEntry = articles[articles.length - 1]
    try {
      const moreArticles = await client.fetch(getMoreArticles, {
        lastDate: lastEntry.date,
        lastId: lastEntry._id,
      })
      setArticles([ ...articles, ...moreArticles ])
    } catch(e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='my-lg'>

      {/* Grid of results */}
      <div className='
        max-w-screen-sm mx-auto px-gutter
        grid grid-cols-1 gap-x-xs gap-y-md w-full
        lg:max-w-screen-xl lg:grid-cols-3'>
        { articles.map((article, index) => (
          <MemoizedArticleCard
            key={ article._id}
            revealOnce
            revealDelay={ (index % 3) * 0.2 }
            {...article } />
        ))}
      </div>

      {/* Load more button */}
      { remainingCount > 0 && (
        <div className='flex place-content-center my-md'>
          <LoadMoreButton
            {...{ remainingCount, loading }}
            onClick={loadMore} />
        </div>
      )}
    </div>
  )
}

function LoadMoreButton({ remainingCount, loading, onClick}: {
  remainingCount: number
  loading: boolean
  onClick: Button["onClick"]
}): React.ReactElement {
  return (
    <PrimaryButton {...{ loading, onClick }}>
      Load More

      {/* Remaining count */}
      {!loading && (
        <span className='
          ml-2
          text-[.8em] font-bold
          inline-flex h-5f w-5f place-content-center
          bg-white/25 rounded-full'>
          { remainingCount }
        </span>
      )}

    </PrimaryButton>
  )
}
