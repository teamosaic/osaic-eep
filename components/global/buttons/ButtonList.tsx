import Button from './Button'

// Renders a list of buttons as a row (by default). This is primarily intended
// to be used by PortableText.
export default function ButtonList({ buttons, className }: {
  buttons: any[],
  className?: string
}): React.ReactElement {
  return (

    // List container
    <div className={`flex items-center justify-center gap-x-6 ${className}`}>

      {/* Render buttons */}
      { (buttons || []).map(button => (
        <Button key={ button._key } {...button} />
      ))}

    </div>
  )
}
