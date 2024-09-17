import { groq } from 'next-sanity'

export const getWelcome = groq`
  *[ _type == 'welcome' ] { body }[0]
`

export const welcomeStaticPaths = groq`
  *[_type == 'tower' && defined(uri)] {
    _type,
    'uri': uri.current
  }
`
