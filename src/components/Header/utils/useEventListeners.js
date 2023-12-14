import { useEffect, useState } from 'react';
import { breakpointNumbers } from '../../../atoms/breakpoints';

const useEventListeners = (initialTheme, activeMenu) => {
  const [activeTheme, setActiveTheme] = useState(initialTheme);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const newTheme = window.scrollY > 0 ? 'Fill - Light' : initialTheme;
    setActiveTheme(prevTheme =>
      prevTheme !== newTheme ? newTheme : prevTheme
    );
    setScrolled(window.scrollY > 0);
  };

  const handleResize = () => {
    if (window.innerWidth > breakpointNumbers.xl && mobileNavActive) {
      setMobileNavActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileNavActive]);

  useEffect(() => {
    document.body.style.overflow = mobileNavActive ? 'hidden' : 'auto';

    if (mobileNavActive || window.scrollY > 0) {
      setActiveTheme('Fill - Light');
    } else {
      setActiveTheme(initialTheme);
    }
  }, [mobileNavActive]);

  useEffect(() => {
    if (mobileNavActive || window.scrollY > 0) {
      setActiveTheme('Fill - Light');
    } else if (activeMenu !== null) {
      if (activeTheme === 'Transparent - Light') {
        setActiveTheme('Transparent - Light');
      } else {
        setActiveTheme('Fill - Light');
      }
    } else {
      setActiveTheme(initialTheme);
    }
  }, [activeMenu]);

  return {
    activeTheme,
    mobileNavActive,
    setMobileNavActive,
    scrolled,
  };
};

export default useEventListeners;
