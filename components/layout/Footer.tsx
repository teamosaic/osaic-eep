import { signOut } from "next-auth/react"
import React, { useContext, useEffect, useRef, useState } from 'react';

import MarketingPortableText from '~/components/global/portableText/MarketingPortableText';
import { SettingsContext } from '~/providers/settings';
import { Settings } from '~/types/globalTypes';


type FooterProps = {
  previewSite: string;
  onInViewChange: (inView: boolean) => void;
};


export default function Footer({ previewSite, onInViewChange }: FooterProps) {

  const settingsContext = useContext<Settings>(SettingsContext);
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footerElement = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        onInViewChange(inView);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [onInViewChange]);


  return (
    <footer
      ref={footerRef}
      className="
        bg-evergreen
        px-sm
        py-[100px]
        when-not-mobile:p-sm
        when-not-mobile:mt-0
        text-white
        -mt-[32px]
        relative
        z-[1]">

      <div className="absolute inset-0 z-1 bg-black/20"></div>

      <MarketingPortableText className="relative z-2" value={settingsContext.footer} />

      { previewSite ? (
        <>
           <>
          <button onClick={() => { signOut() }}>
            <span className="absolute inset-0" aria-hidden="true" />
            Log Out
          </button>
        </>
        </>
      ) : null}

    </footer>
  )
}



