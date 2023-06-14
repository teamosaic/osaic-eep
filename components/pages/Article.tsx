import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import ArticlePortableText from '~/components/global/portableText/MarketingPortableText'
import PageHead from '~/components/layout/PageHead'
import SanityImage from '~/packages/sanity-image'
import { Article } from '~/types'

import TextButton from '../global/buttons/TextButton'
import CategoryBadge from '../global/CategoryBadge'
import DateLabel from '../global/DateLabel'


export default function Article({ page }: { page: Article }) {

  return (
    <>
      <PageHead {...page} />

      {/* Create columns */}
      <article className='
        max-w-screen-xl mx-auto px-gutter
        lg:grid grid-flow-col gap-24f'>

        {/* Meta column */}
        <div className='w-fit text-xs
          flex w-full items-center mb-4f
          lg:block lg:text-right lg:mt-16f lg:mb-0'>

          {/* Published date */}
          <DateLabel date={page.date} />

          {/* List of categories */}
          <div className='mt-5f hidden lg:block'>
            <CategoryBadge name='Example Category'/>
          </div>

          {/* Back to all articles */}
          <div className='ml-auto lg:mt-16f'>
            <TextButton url='/articles'>
              <ArrowLeftIcon className='
                h-5f w-5f inline-block mr-[0.5em]
                relative top-[-1px]'/>
              All Articles
            </TextButton>
          </div>
        </div>

        {/* Article content */}
        <div>

          {/* Marquee container */}
          <div className='
            relative
            bg-indigo-900 text-white/90
            px-gutter py-24f min-h-80f'>

            {/* Make image fade into background */}
            <SanityImage
              expand
              source={ page.image }
              sizes='100vw'
              className='opacity-70'/>

            {/* The title */}
            <div className='prose prose-base relative'>
              <h1>{ page.title }</h1>
            </div>

          </div>

          {/* The article text */}
          <ArticlePortableText
            value={ page.body }
            className='my-16f' />
        </div>

      </article>
    </>
  )
}
