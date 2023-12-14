import { useEffect, useState } from 'react';

const handleSticky = (ref, setIsSticky) => {
  if (!ref || !ref.current) return;

  const DESKTOP_HEADER_HEIGHT = 80;
  const MOBILE_HEADER_HEIGHT = 72;
  const elementTopPosition = ref.current.getBoundingClientRect()?.top;

  if (window.innerWidth >= 992) {
    if (elementTopPosition === DESKTOP_HEADER_HEIGHT) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  if (window.innerWidth < 992) {
    if (elementTopPosition === MOBILE_HEADER_HEIGHT) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
};

const useIsSticky = ref => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => handleSticky(ref, setIsSticky));
    window.removeEventListener('scroll', () => handleSticky(ref, setIsSticky));
  }, [ref]);

  return isSticky;
};

export default useIsSticky;
