import SmartLink from '~/packages/smart-link/SmartLink'
import { Icon } from '~/components/global/buttons/Icon'
import {ButtonIcon} from '~/types'

type EEPButtonProps = {
  href: string;
  label: string;
};

export function EEPButton({
  href,
  label = "Read More"
}: EEPButtonProps): React.ReactElement {
  return (
    <>
      <SmartLink
        href={href}
        className='flex mt-sm px-8 h-[50px] items-center rounded-full w-fit
          font-marselis tracking-widest text-white whitespace-nowrap
          group bg-accent hover:bg-accent-dark transition-all duration-300'>

        <span className="transition-[margin] group-hover:mr-2 uppercase" aria-label={label} >
          {label}
        </span>

        <Icon
          className="transition-[width] group-hover:w-4 ease-in-out duration-300 w-0 h-4"
          type={ButtonIcon.RightArrow}
        />

      </SmartLink>
    </>
  );
}
