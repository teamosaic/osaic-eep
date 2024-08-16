import PageHead from '~/components/layout/PageHead'
import SmartLink from '~/packages/smart-link/SmartLink'
import { Tower } from '~/types'

export default function TowerPage({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } />

      <div className="text-center p-lg">
        <h1 className="">{page.title}</h1>
        <SmartLink href="/">Back Home</SmartLink>
      </div>

    </>
  )
}
