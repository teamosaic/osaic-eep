import SanityNextVisual from '@react-visual/sanity-next';

// Adapter so moving to @react-visual/sanity-next isn't a breaking change
export default function SanityImage(props) {

  // Prop for the image/source is different
  props = {
    ...props,
    image: props.source,
    source: undefined,
  }

  // Make Visual instance
  return (
    <SanityNextVisual {...props} />
  )
}
