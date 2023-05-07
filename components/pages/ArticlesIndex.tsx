import type { ArticlesIndex } from '~/types'
import PageHead from '~/components/layout/PageHead'
import BlocksList from '~/components/blocks/BlocksList'
import ArticleCard from '~/components/global/cards/ArticleCard'

export default function ArticlesIndex({ page }: { page: ArticlesIndex }) {
  return (
    <>
      <PageHead {...page} />
      <BlocksList blocks={ page.headerBlocks } />
      <ArticlesListing articles={ page.articles } />
      <BlocksList blocks={ page.footerBlocks } />
    </>
  )
}

// Render the list of articles
function ArticlesListing({ articles = [] }: {
  articles: ArticlesIndex["articles"]
}): React.ReactElement {
  return (
    <div className='
      max-w-screen-sm mx-auto px-gutter
      grid grid-cols-1 gap-x-8 gap-y-20
      lg:max-w-screen-xl lg:grid-cols-3'>
      { articles.map(ArticleCard) }
    </div>
  )
}
