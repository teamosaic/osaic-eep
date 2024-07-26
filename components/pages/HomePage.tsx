import PageHead from '~/components/layout/PageHead'
import { Home } from '~/types'

export default function HomePage({ page }: { page: Home }) {

  return (
    <>
      <PageHead { ...page } />

      <div className="text-center w-11/12 mx-auto max-w-lg py-[100px]">
        <h1 className="text-3xl">HOME PAGE</h1>
        <h2 className="text-2xl">{ page.title }</h2>
        <h3 className="font-bold">{ page.enhancementsTitle }</h3>
        <p>{ page.enhancementsDescription }</p>

        <h2 className="text-2xl mt-lg">Enhancements Here:</h2>
      </div>
    </>
  )
}
