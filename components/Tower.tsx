import { groq } from 'next-sanity'

export default function Tower({ page }) {
	return (
    <main className='p-8'>
      <h1 className='text-2xl'>{ page.title }</h1>
      <p>{ page.body }</p>
   </main>
  )
}

export const getTowerBySlug = groq`
	*[_type == 'tower' && slug.current == $slug]{
		...,
		'slug': slug.current
	}[0]
`
