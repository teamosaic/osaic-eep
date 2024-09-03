import SmartLink from '~/packages/smart-link/SmartLink'

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
      className="
        bg-accent
        py-3
        px-8
        mt-5
        uppercase
        inline-block
        text-white
        rounded-full
        font-marselis">
        {label}
      </SmartLink>
    </>
  );
}
