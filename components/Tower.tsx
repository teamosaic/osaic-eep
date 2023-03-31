import { groq } from 'next-sanity'
import BlocksList from './Blocks/BlocksList'
import Head from 'next/head'

export default function Tower({ page }) {
	const { blocks } = page
	return (<>
		<Head>
			<title>{ page.title }</title>
		</Head>
    <main>
			<BlocksList {...{ blocks }} />
   </main>
  </>)
}

export const getTowerBySlug = groq`
	*[_type == 'tower' && slug.current == $slug]{
		...,
		'slug': slug.current
	}[0]
`
