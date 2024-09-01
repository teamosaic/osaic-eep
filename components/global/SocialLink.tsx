import Image, { StaticImageData } from 'next/image';
import SmartLink from '~/packages/smart-link/SmartLink';

import instagram from '~/assets/images/instagram.svg';
import linkedin from '~/assets/images/linkedin.svg';
import twitter from '~/assets/images/twitter.svg';

type SocialLinkProps = {
  link: string;
  img: 'instagram' | 'linkedin' | 'twitter';
  alt?: string;
};

export default function SocialLink({
  link, img, alt
}: SocialLinkProps): React.ReactElement {

  const imageMap: Record<string, StaticImageData> = {
    instagram,
    linkedin,
    twitter,
  };

  const image = imageMap[img];


  return (

    <SmartLink
      href={link}
      className="mr-2 transition flex hover:bg-evergreen-hover items-center justify-center bg-evergreen text-white w-[36px] h-[36px] rounded-full">
      <Image className="w-auto h-[16px]" src={image} alt={alt} />
    </SmartLink>

  )
}
