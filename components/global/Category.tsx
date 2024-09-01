import classNames from 'classnames';

type CategoryContainerProps = {
  children: React.ReactNode;
  visible?: boolean,
  nav?: boolean
};
export function CategoryContainer({
  children,
  visible,
  nav,
}: CategoryContainerProps): React.ReactElement {
  return (
    <div
      className={classNames(
        'rounded-default my-4 transition',
        {
          'bg-medium-grey': visible && !nav,
          'bg-light-grey': !visible && !nav,
        }
      )}
    >
      {children}
    </div>
  )
}


export function CategoryContent({ children }) {
  return (
    <div className="mt-xxs px-xs py-xxs pt-0">
      { children }
    </div>
  )
}

type CategoryHeadingProps = {
  children: React.ReactNode;
  nav?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function CategoryHeading({
  children,
  nav,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CategoryHeadingProps): React.ReactElement {
  return (
    <div
      className={classNames(
        'rounded-default px-xs py-xxs flex items-center cursor-pointer transition group',
        {
          'hover:bg-medium-grey': !nav,
          'hover:bg-lime': nav,
        }
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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

type CategoryPillProps = {
  count: number;
  visible?: boolean;
  hovered?: boolean;
  nav?: boolean;
};

export function CategoryPill({
  count,
  visible,
  hovered,
  nav
}: CategoryPillProps): React.ReactElement {
  return (

    <div className={classNames(
      "transition ml-5 flex items-center h-[27px] px-[20px]",
      "rounded-full font-marselis font-[400]",
        {
          'bg-zircon text-evergreen': !visible && !nav,
          'bg-evergreen text-white': visible && !nav,
          'group-hover:bg-evergreen group-hover:text-white': !nav,
          'bg-zircon text-evergreen ml-0': nav,
          'group-hover:bg-white group-hover:text-evergreen': nav
        }
      )}
    >
      { count }
    </div>
  )
}
