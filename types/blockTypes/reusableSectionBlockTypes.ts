import type { BlockLayout } from '~/types'

import { ReusableSection } from '../documentTypes'

export interface ReusableSectionsBlock extends BlockLayout {
  _id: string
  reusableSection: ReusableSection[]
}
