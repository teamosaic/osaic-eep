import { groq } from 'next-sanity'

export default function Tower({ page }) {
	return (
    <>
      <h1>{ page.title }</h1>
      <p>{ page.body }</p>
    </>
  )
}

export const getTowerBySlug = groq`
	*[_type == 'tower' && slug.current == $slug]{
		...,
		'slug': slug.current
	}[0]
`
