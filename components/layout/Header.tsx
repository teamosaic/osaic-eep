import { isDark } from '@bkwld/light-or-dark'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext,useEffect, useState } from 'react';

import close from '~/assets/images/close.svg';
import garnish from '~/assets/images/garnish-a.svg';
import hamburger from '~/assets/images/hamburger.svg';
import logoLight from '~/assets/images/logo.svg';
import logoDark from '~/assets/images/logo-dark.svg';
import {
  CategoryContainer,
  CategoryHeading,
  CategoryPill,
  CategoryTitle
} from '~/components/global/Category';
import SocialLink from '~/components/global/SocialLink';
import Spinner from '~/components/global/Spinner';
import SmartLink from '~/packages/smart-link/SmartLink';
import { SettingsContext } from '~/providers/settings'
import { getEnhancements } from '~/queries/enhancementQueries';
import { client } from '~/sanity/client';

export default function LayoutHeader({ theme }): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDarkLogo, setShowDarkLogo] = useState(false);
  const [enhancementCategories, setEnhancements] = useState([]);
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const scrollerRef = React.createRef<HTMLDivElement>();
  const settings = useContext(SettingsContext)
  const router = useRouter();

  useEffect(() => {
    client.fetch(getEnhancements).then((sections) => {
      setEnhancements(sections);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const scrolled = window.scrollY > 500;

      if (isMobile && scrolled) {
        setScrolledPastThreshold(true);
      } else {
        setScrolledPastThreshold(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if(isDark(theme.hex)){
      setShowDarkLogo(false);
    } else {
      setShowDarkLogo(true);
    }
  }, [theme]);

  useEffect(() => {
    if (menuOpen && scrollerRef.current) {
      disableBodyScroll(scrollerRef.current);
    } else {
      clearAllBodyScrollLocks();
    }

    // Cleanup on component unmount
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuOpen, scrollerRef]);

  const toggleMenu = function() {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='flex items-center w-full fixed z-[5] text-white px-[30px] when-not-mobile:px-[50px] h-header'>
      <nav className="flex grow items-center justify-between relative z-[100]" aria-label="Global">
        <div className="flex lg:flex-1">
          <SmartLink className="relative -top-1" href="/">
            <span className="sr-only">EEP</span>
            {menuOpen || scrolledPastThreshold || showDarkLogo ? (
              <Image className="w-auto h-[40px]" src={logoDark} alt="Osaic EEP" />
            ) : (
              <Image className="w-auto h-[40px]" src={logoLight} alt="Osaic EEP" />
            )}
          </SmartLink>
        </div>

        <div className="flex">
          <button
            type="button"
            className="
              w-[50px]
              h-[50px]
              bg-lime
              inline-flex
              items-center
              justify-center
              rounded-full
              shrink-0
              p-2.5
              text-gray-400
            "
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Main Menu</span>

              <Image
                className={classNames(
                  "w-[18px] h-auto transition absolute",
                  {
                    "opacity-1": menuOpen,
                    "opacity-0": !menuOpen,
                  })}
                  src={close} alt="Osaic EEP" />
              <Image
                className={classNames(
                  "w-[28px] h-auto transition absolute",
                  {
                    "opacity-0": menuOpen,
                    "opacity-1": !menuOpen,
                  })}
                  src={hamburger} alt="Osaic EEP" />
          </button>
        </div>
      </nav>

      <div className={classNames(
        "absolute border-b-2 border-border-light/0 inset-0 transition duration-300 z-[51]",
        {
          "bg-white border-border-light/100": menuOpen || scrolledPastThreshold,
          "bg-transparent": !menuOpen || !scrolledPastThreshold,
        }
      )} />

      <div className="relative z-[50]">
        <div onClick={toggleMenu} className={classNames(
          "fixed inset-0 bg-black/50 transition",
          {
            "opacity-1 visible": menuOpen,
            "opacity-0 invisible": !menuOpen,
          }
        )} />
        <div
          ref={scrollerRef}
          className={classNames(
            "flex flex-col right-0 top-header",
            "nav-pane-h-calc overflow-y-scroll",
            "fixed w-screen max-w-lg transform",
            "transition duration-500 bg-white",
            "px-6 py-6 sm:ring-1 sm:ring-white/10",
            {
              "translate-x-0": menuOpen,
              "translate-x-full": !menuOpen,
            }
          )}
        >

          <div className="absolute inset-0">
            <Image className="w-full h-auto" src={garnish} alt="" />
          </div>

          <div className="grow relative z-2">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <span className="uppercase text-tower-grey font-marselis font-bold text-[16px] tracking-[1px] ml-xxs">Categories</span>
                {enhancementCategories.map((category, index) => (
                  <SmartLink key={index} href={category.uri.current}>
                    <CategoryContainer nav visible={true}>
                      <CategoryHeading nav>
                        <CategoryTitle title={category.title} />
                        <CategoryPill nav count={category.blocks.length} />
                      </CategoryHeading>
                    </CategoryContainer>
                  </SmartLink>
                ))}
              </>
            )}
          </div>
          <div className="b-0 flex items-center relative z-3">

            <SocialLink link={settings.linkedin} img='linkedin' alt="Osaic LinkedIn" />
            <SocialLink link={settings.instagram} img='instagram' alt="Osaic Instagram" />
            <SocialLink link={settings.twitter} img='twitter' alt="Osaic Twitter" />

          </div>
        </div>
      </div>
    </header>
  );
}
