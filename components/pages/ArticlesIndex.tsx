import { ArticlesIndex } from '~/types'
import PageHead from '~/components/layout/PageHead'
import BlocksList from '~/components/blocks/BlocksList'

export default function ArticlesIndex({ page }: { page: ArticlesIndex }) {
  return (
    <>
      <PageHead {...page} />
      <BlocksList blocks={ page.headerBlocks } />
      <BlocksList blocks={ page.footerBlocks } />
    </>
  )
}
