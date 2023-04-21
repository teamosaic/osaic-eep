
// Set all the fields to the "content" group
export function contentGroup(fields: object[]): object[] {
  return setGroup('content', fields)
}

// Set a common "group" value to all fields
export function setGroup(groupName: string, fields: object[]): object[] {
  return fields.map(field => {
    let groupValue: string[] | string;
    if ('group' in field) {
      if (Array.isArray(field.group)) groupValue = [...field.group, groupName]
      else groupValue = [field.group as string, groupName]
    } else {
      groupValue = groupName
    }
    return { group: groupValue, ...field }
  })
}

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

// Helper to DRY up making previews of blocks
export function makeBlockPreview({ blockName, titleField, imageField, icon }: {
  blockName: string
  titleField: string
  imageField?: string
  icon?: React.ReactNode
}): Object {
  return {

    select: {
      title: titleField,
      disabled: 'disabled',
      ...(imageField ? { image: imageField } : {}), // Optional
    },

    prepare({ title, image, disabled }) {

      // Auto stingify wysiwygs / blocks
      if (Array.isArray(title)) title = portableTextSummary(title)
      return {
        title,
        media: image || icon,

        // Auto append the disabled state to the subtitle
        subtitle: blockName + (disabled ? ' [Disabled]' : ''),
      }
    }
  }
}

// This gets the first block of text from a portableText array
// https://www.sanity.io/docs/previewing-block-content
export function portableTextSummary(blocks: any[]): string {
  const block = (blocks || []).find(block => block._type === 'block')
  if (!block) return 'No title'
  return block.children
    .filter(child => child._type === 'span')
    .map(span => span.text)
    .join('')
}
