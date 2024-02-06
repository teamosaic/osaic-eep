import { TfiLayoutCtaCenter } from 'react-icons/tfi';

import { makeBlockSchema } from '~/sanity/lib/schema';

export const reusableSectionBlockSchema = makeBlockSchema({
  name: 'reusableSectionBlock',
  title: 'Reusable Section',
  icon: TfiLayoutCtaCenter,
  hasBackground: false,
  contentFields: [
    {
      name: 'reusableSection',
      type: 'reference',
      description: 'Reusable Section',
      to: [{ type: 'reusableSections' }]
    }
  ]
});
