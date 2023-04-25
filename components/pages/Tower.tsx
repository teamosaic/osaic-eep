import BlocksList from '~/components/blocks/BlocksList'
import PageHead from '~/components/layout/PageHead'
import { Tower, HeroBlock } from '~/types'
import type { Image } from 'sanity'

export default function Tower({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } image={ getFirstHeroImage(page) } />
      <BlocksList blocks={ page.blocks } />
    </>
  )
}

// Get the first hero image to use as the default meta image
function getFirstHeroImage(page: Tower): Image {
  if (!page.blocks?.length) return

  const firstHeroBlock = page.blocks
    .find(block => block._type == 'heroBlock') as HeroBlock
  if (!firstHeroBlock) return

  return firstHeroBlock.background
}

