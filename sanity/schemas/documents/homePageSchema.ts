import { BsFillHouseDoorFill } from 'react-icons/bs';

import { makeSingletonPageSchema } from '~/sanity/lib/schema'

export const homePageSchema = makeSingletonPageSchema({
  name: 'homePage',
  uri: '/',
  title: 'Home Page',
  icon: BsFillHouseDoorFill,
  contentFields: [

    {
      name: 'bg',
      type: 'image',
      description: 'Large Home Page BG Image (recommended 1600x1000px)',
    },
    {
      name: 'enhancementsTitle',
      type: 'string',
      description: 'Title for the main Enhancements panel.',
    },
    {
      name: 'enhancementsDescription',
      type: 'text',
      description: 'Description for the main Enhancements panel.',
    }

  ],
})

