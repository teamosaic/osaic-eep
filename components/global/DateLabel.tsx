// Render the date as a string
export default function DateLabel({
  date,
  className,
}: {
  date: string,
  dateStyle?: string
  className?: string
}): React.ReactElement {

  // Use an explicit timezone so we don't get hydration issues when server's
  // timezone is different than users
  const dateObj = new Date(date)
  const displayDate = dateObj.toLocaleDateString('en-US', {
    dateStyle: 'medium',
    timeZone: 'America/Los_Angeles',
  })

  return (
    <time dateTime={ dateObj.toISOString() } className={ className }>
      { displayDate }
    </time>
  )

}
