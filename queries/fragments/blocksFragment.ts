import { groq } from 'next-sanity'

import { visualField } from '../fields/assetFields'

export const blocksFragment = groq`
  ...,

  // De-reference image fields for acccessing image metadata
  _type == 'enhancementsBlock' => {
    ${ visualField('image') },
  },

`
