import { groq } from 'next-sanity'

export const articleCardFragment = groq`
  ...,

  'uri': uri.current,
  'date': coalesce(date, _createdAt),
  image { ..., asset-> },

  // Make an excerpt from the body
  'body': undefined, // Don't fetch the whole body
  'excerpt': array::join(string::split((pt::text(body)), '')[0...256], '')

`
