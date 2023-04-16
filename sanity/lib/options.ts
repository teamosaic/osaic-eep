
// Create a Sanity options array from an enum type, supporting passing in
// custom title overrides
export function createListOptionsFromEnum(
  enumObj: object,
  customTitles: object = {}
):{ title: string, value: string }[] {
  return Object.entries(enumObj).map(([ title, value ]) => ({
    title: customTitles[value] || title,
    value
  }))
}
