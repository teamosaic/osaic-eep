import { fluid } from './fluid'

// https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
const defaultSpaceScale = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, // Jump by 0.5
  4, 5, 6, 7, 8, 9, 10, 11, 12,  // Jump by 1
  14, 16, // Jump by 2
  20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, // Jump by 4
  72, 80, // Jump by 8
  96, // Jump by 16
]

// The scale keys result in pixel values by multiplying by 4
const defaultSpaceScaleFactor = 4

// Make fluid versions of all of the default spacing values that have `f`
// prefixes.  So you can do, for instance, `py-8f`.
// https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
export function makeFluidSpacingDefaults(): object {
  return Object.fromEntries(
    defaultSpaceScale.map((space: number): SpaceEntry => {
      return [ `${space}f`, fluid(space * defaultSpaceScaleFactor)]
    })
  )
}

type SpaceEntry = [ SpaceName, SpaceFluidValue ]
type SpaceName = string
type SpaceFluidValue = string
