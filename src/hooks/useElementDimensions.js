import { useEffect, useState } from 'react';

export const useElementDimensions = elementRef => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      if (elementRef.current) {
        setDimensions({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
        });
      }
    }

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [elementRef]);

  return dimensions;
};

export default useElementDimensions;
