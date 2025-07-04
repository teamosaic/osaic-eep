// If the key exists in the options, return it.  If not and there is a key
// called "default", return that.  Otherwise, return nothing
export function mapOption(key: any, options: Object): any {
  if (key in options) return options[key as keyof typeof options]
  if ('default' in options) return options.default
}

// Like mapOption but expects an array of keys and and maps all of them
export function mapOptions(keys: any[], options: Object): any {
  return (keys || []).map(key => mapOption(key, options))
}

export function handleize(string: String): any {
  return string.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');
}
