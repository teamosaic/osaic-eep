import classNames from 'classnames';

export function EnhancementLink({ children, theme }) {
  return (


    <div className={classNames(
      'p-6 rounded-default mb-3 flex items-center group',
      {
        'bg-white text-evergreen': theme == 'default',
        'bg-ada-bitter-sweet text-white': theme == 'red',
        'bg-evergreen text-white': theme == 'green',
      }
    )}>
      { children }
    </div>
  )
}
