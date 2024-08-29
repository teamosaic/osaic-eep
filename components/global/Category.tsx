import classNames from 'classnames';

export function CategoryContainer({ children, visible }) {
  return (
    <div
      className={classNames(
        'px-xs py-xxs rounded-default my-4 transition',
        {
          'bg-medium-grey': visible,
          'bg-light-grey': !visible,
        }
      )}
    >
      {children}
    </div>
  )
}


export function CategoryContent({ children }) {
  return (
    <div className="mt-xxs">
      { children }
    </div>
  )
}


export function CategoryHeading({ children, onClick }) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      { children }
    </div>
  )
}


export function CategoryTitle({ title }) {
  return (
    <div className="grow text-evergreen text-card-title leading-card-title font-marselis">
     <h3>{title}</h3>
    </div>
  )
}


export function CategoryPill({ count, visible }) {
  return (

    <div className={classNames(
      'transition ml-5 flex items-center h-[27px] px-[20px] rounded-full font-marselis font-[400] ',
        {
          'bg-evergreen text-white': visible,
          'bg-zircon text-evergreen': !visible,
        }
      )}
    >
      { count }
    </div>
  )
}
