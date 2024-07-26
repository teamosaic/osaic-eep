import { groq } from 'next-sanity'

export const getHomePage = groq`
  *[uri.current == '/']{
    ...
  }[0]
`

// Get home page
export const homeStaticPaths = groq`
  *[uri.current == '/']{
     'uri': '/',
  }
`
