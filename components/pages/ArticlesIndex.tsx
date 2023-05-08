import type { ArticlesIndex } from '~/types'
import PageHead from '~/components/layout/PageHead'
import BlocksList from '~/components/blocks/BlocksList'
import ArticleCard from '~/components/global/cards/ArticleCard'

export default function ArticlesIndex({ page }: { page: ArticlesIndex }) {
  return (
    <>
      <PageHead {...page} />
      <BlocksList blocks={ page.headerBlocks } />
      <ArticlesListing initialArticles={ page.initialArticles } />
      <BlocksList blocks={ page.footerBlocks } />
    </>
  )
}

// Render the list of articles
function ArticlesListing({ initialArticles = [] }: {
  initialArticles: ArticlesIndex["initialArticles"]
}): React.ReactElement {

  const articles = [...initialArticles]

  return (
    <div className='
      my-lg
      max-w-screen-sm mx-auto px-gutter
      grid grid-cols-1 gap-x-xs gap-y-md
      lg:max-w-screen-xl lg:grid-cols-3'>
      { articles.map(ArticleCard) }
    </div>
  )
}
