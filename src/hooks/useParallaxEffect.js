import { useEffect } from 'react';

const useParallaxEffect = element => {
  useEffect(() => {
    const handleScroll = () => {
      if (!element || !element.current) return;
      const elementTop = element.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      const startParallax = viewportHeight - elementTop > 0;
      const parallaxCalc = viewportHeight - elementTop;

      if (elementTop === 0) {
        element.current.style.backgroundPosition = `center ${parallaxCalc}px`;
      }

      if (startParallax) {
        element.current.style.backgroundPosition = `center ${parallaxCalc}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
};

export default useParallaxEffect;
