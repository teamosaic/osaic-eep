import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TextButton from './TextButton'

// Renders a list of buttons as a row (by default). This is primarily intended
// to be used by PortableText.
export default function ButtonList({ buttons, className }: {
  buttons: any[],
  className?: string
}): React.ReactElement {
  return (
    <div className={`flex items-center justify-center gap-x-6 ${className}`}>
      { (buttons || []).map(renderButton)}
    </div>
  )
}

// Render a specific button based on it's _type
function renderButton(button: any) {
  switch(button._type) {
    case 'primaryButton': return <PrimaryButton {...button} />
    case 'secondaryButton': return <SecondaryButton {...button} />
    case 'textButton': return <TextButton {...button} />
  }
}
