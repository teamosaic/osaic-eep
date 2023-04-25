import BasicPortableText from '~/packages/portable-text/BasicPortableText'
import PageHead from '~/components/layout/PageHead'
import { Article } from '~/types'

export default function Article({ page }: { page: Article }) {
  return (
    <>
      <PageHead {...page} />

      <article className='max-w-screen-md mx-auto px-8'>
        <h1>{ page.title }</h1>
        <BasicPortableText value={ page.body } />
      </article>

    </>
  )
}
