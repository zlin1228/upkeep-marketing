import { useEffect } from 'react';

const useScrollUtil = location => {
  useEffect(() => {
    let scrollLocation;
    if (window.innerWidth > 1024 || window.innerWidth <= 1024) {
      scrollLocation = 1250;
    }
    if (window.innerWidth <= 991) scrollLocation = 1650;
    if (window.innerWidth === 768) scrollLocation = 1700;
    if (window.innerWidth < 768) scrollLocation = 2100;
    if (window.innerWidth <= 499) scrollLocation = 2000;

    if (location.hash === '#integrations') {
      window.scrollTo({
        top: scrollLocation,
        behavior: 'smooth',
      });
      setTimeout(() => {
        if (typeof window !== `undefined`) {
          window.location.hash = 'marketplace';
        }
      }, 1000);
    }
  }, [location.hash]);
};

export default useScrollUtil;
