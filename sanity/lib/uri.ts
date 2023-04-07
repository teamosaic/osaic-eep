import kebabCase from 'lodash/kebabCase'

// https://github.com/async-labs/builderbook/issues/119#issue-362779693
const slugify = text => kebabCase(text.replace(/&/g,'-and-'))

function formatUri(input, uriStart) {
  return uriStart + slugify(input)
}

// Helper for making URI fields. Based on
// https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
export function uriField(prefix = ``, source = `title`) {
  const uriStart = prefix ? `/${prefix}/` : `/`

  return {
    name: `uri`,
    type: `slug`,
    title: 'URI',
    description: 'The path to this entry.',
    group: 'content',
    options: {
      source,
      slugify: (value) => {
        return formatUri(value, uriStart)
      },
    },
    validation: (Rule) =>
      Rule.required().custom((uri) => {

        const current = uri?.current
        if (!current) return true // Will be enforced by "required()"

        if (!current.startsWith(uriStart)) {
          return `URI must begin with "${uriStart}". Click "Generate" to reset.`
        }

        if (current == uriStart && current != '/') {
          return `URI cannot be empty`
        }

        if (current.endsWith("/") && current != '/') {
          return `URI cannot end with "/"`
        }

        return true
      }),
  }
}
