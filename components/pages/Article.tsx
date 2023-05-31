import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import PageHead from '~/components/layout/PageHead'
import { Article } from '~/types'
import DateLabel from '../global/DateLabel'
import CategoryBadge from '../global/CategoryBadge'
import SanityImage from '~/packages/sanity-image'
import TextButton from '../global/buttons/TextButton'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Article({ page }: { page: Article }) {

  return (
    <>
      <PageHead {...page} />

      {/* Create columns */}
      <article className='
        max-w-screen-xl mx-auto px-gutter
        lg:grid grid-flow-col gap-24f'>

        {/* Meta column */}
        <div className='w-fit text-xs text-right lg:mt-16f'>

          {/* Published date */}
          <DateLabel date={page.date} />

          {/* List of categories */}
          <div className='mt-5f'>
            <CategoryBadge name='Example Category'/>
          </div>

          {/* Back to all articles */}
          <div className={`lg:mt-16f`}>
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
            <div className='prose prose-default relative'>
              <h1>{ page.title }</h1>
            </div>

          </div>

          {/* The article text */}
          <BasicPortableText
            value={ page.body }
            className='prose-article my-16f' />
        </div>

      </article>
    </>
  )
}
