import { ButtonType, Button } from '~/types'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TextButton from './TextButton'

// Delegates render of a button to a specific, styled button
export default function Button(
  props: Button & { type: ButtonType }
): React.ReactElement {
  switch(props.type) {
    case ButtonType.Primary: return <PrimaryButton {...props} />
    case ButtonType.Secondary: return <SecondaryButton {...props} />
    case ButtonType.Text: return <TextButton {...props} />
  }
}
