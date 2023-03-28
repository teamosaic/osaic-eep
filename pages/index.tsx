import { client } from '../sanity/lib/client'

export default function IndexPage({ page }) {

  return (
    <>
      <h1>{ page.title }</h1>
    </>
  )
}

export async function getStaticProps() {
  const page = await client.fetch(`
    *[_type == 'tower' && slug.current == '__home__']{
      ...
    }[0]`)
  return {
    props: { page }
  };
}
