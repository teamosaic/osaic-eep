import type { ArticlesIndex } from '~/types'
import PageHead from '~/components/layout/PageHead'
import BlocksList from '~/components/blocks/BlocksList'
import ArticleListing from './ArticleListing'

export default function ArticlesIndex({ page }: { page: ArticlesIndex }) {
  return (
    <>
      <PageHead {...page} />
      <BlocksList blocks={ page.headerBlocks } />
      <ArticleListing
        initialArticles={ page.initialArticles }
        totalArticles={ page.totalArticles } />
      <BlocksList blocks={ page.footerBlocks } />
    </>
  )
}
