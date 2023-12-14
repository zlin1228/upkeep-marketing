import { useEffect, useState } from 'react';

const useMobile = () => {
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 991) {
        setMobileActive(true);
      } else if (window.innerWidth > 991) {
        setMobileActive(false);
      }
    });
    if (window.innerWidth > 991) {
      setMobileActive(false);
    } else if (window.innerWidth <= 991) {
      setMobileActive(true);
    }
  }, []);

  return mobileActive;
};

export default useMobile;
