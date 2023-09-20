import plugin from 'tailwindcss/plugin'

import { fluid } from './fluid'

export default plugin(({ matchUtilities }) => {

    // Add fluid as a utility
    matchUtilities({
      fluid: (value) => {
        const [property, ...args] = value.split(',')
        // console.log(args)
        return {
          [property]: fluid.apply(null, args)
        }
      }
    })


  })
