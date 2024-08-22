export function CategoryContainer({ children, key }) {
  return (
    <div className="bg-light-grey px-xs py-xxs rounded-default my-4" key={key}>
      { children }
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


export function CategoryHeading({ children }) {
  return (
    <div className="flex items-center">
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


export function CategoryPill({ count }) {
  return (
    <div className="bg-zircon ml-5 flex items-center h-[27px] px-[20px] rounded-full font-marselis font-[400] text-evergreen">
      { count }
    </div>
  )
}
