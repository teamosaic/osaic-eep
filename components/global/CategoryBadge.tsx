import clsx from 'clsx'

// Render a category in a badge UI
export default function CategoryBadge({ name, className }: {
  name: string,
  className?: string
}): React.ReactElement {
  return (
    <a
      href='#'
      className={clsx([`
        rounded-full px-3 py-1.5
        bg-white/80 hover:bg-white`,
        className,
      ])}>
      <span className='opacity-70 font-medium'>
        { name }
      </span>
    </a>
  )

}
