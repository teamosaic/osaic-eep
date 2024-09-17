import classNames from 'classnames';
import Image from 'next/image';

import garnish from '~/assets/images/garnish-button.svg';

export function EnhancementLink({ children, theme }) {
  return (


    <div className={classNames(
      'p-6 rounded-default mb-3  group relative',
      {
        'bg-white text-evergreen': theme == 'default',
        'bg-ada-bitter-sweet text-white': theme == 'red',
        'bg-evergreen text-white': theme == 'green',
      }
    )}>

      { theme == 'red' ? (
        <div className="absolute inset-0 z-1">
          <Image className="w-full h-full" src={garnish} alt="" />
        </div>
      ) : null }


      <div className="relative z-2 flex items-center">
        { children }
      </div>
    </div>
  )
}
