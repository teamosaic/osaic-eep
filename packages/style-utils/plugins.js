import plugin from 'tailwindcss/plugin'

import { fluid } from './fluid'

export default plugin(({ matchUtilities }) => {

    // Add fluid as a Tailwind utility
    // EX: fluid-[font-size,100]
    // EX: fluid-[font-size,100,40,{minBreak:768}]
    // Note: Do not use spaces within the arbitrary value brackets
    matchUtilities({
      fluid: (value) => {

        // Parse the arbitrary value where it's comma delimited
        let [property, ...args] = value.split(',')

        // Eval all args that match expectations
        args = args.map(arg => {

          // Numberlike string args like "100" that get converted to a number
          if (arg.match(/^\d+$/)) {
            return Number(arg)
          }

          // Object args like "{minBreak:768}" that need converting from a
          // string into an actual object.
          // https://regex101.com/r/YTKs5G/1
          if (arg.match(/^\{[\d:,minmaxBreak]+\}$/)) {
            return arg.slice(1, -1).split(',').reduce((obj, option) => {
              const [key, val] = option.split(':')
              return { ...obj, [key]: val }
            }, {})
          }

          // Unknown arg, abort
          throw `Unexepected arg ${JSON.stringify(arg)}`
        })

        // Add CSS propery with fluid rules
        return {
          [property]: fluid.apply(null, args)
        }
      }
    })


  })
