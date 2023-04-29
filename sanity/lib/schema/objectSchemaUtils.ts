
// Helper to DRY up making standard object schemas. This should be spread into
// the object variable
export function objectMixin({ title, titleField, imageField }: {
  title: string, // Used as subtitle
  titleField: string, // Field that will be used as the title
  imageField?: string,
}): {
  title: string
  type: 'object'
  preview: object,
} {
  return {
    title,
    type: 'object',
    preview: makeObjectPreview({
      objectTitle: title,
      titleField,
      imageField
    }),
  }
}


// Make a simple preview for an object
export function makeObjectPreview({ objectTitle, titleField, imageField }: {
  objectTitle: string, // Used as subtitle
  titleField: string, // Field that will be used as the title
  imageField?: string,
}): {
  select: object,
  prepare: Function,
} {
  return {

    select: {
      title: titleField,
      ...(imageField ? { image: imageField } : {}), // Optional
    },

    prepare({ title, image }) {
      return {
        title,
        subtitle: objectTitle,
        media: image,
      }
    }
  }
}
