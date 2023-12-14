import { useState, useEffect } from 'react';

const oldDomain = 'https://www.onupkeep.com';
const newDomain = 'https://www.upkeep.com';

const useCallToAction = url => {
  const [origin, setOrigin] = useState('');
  const [type, setType] = useState('external');

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (url) {
        if (url?.startsWith('/')) {
          setOrigin('');
          setType('internal');
          return;
        }
        if (url?.includes(oldDomain)) {
          setOrigin(oldDomain);
          setType('internal');
          return;
        }
        if (url?.includes(newDomain)) {
          setOrigin(newDomain);
          setType('internal');
          return;
        }
        if (url?.includes(window.location.origin)) {
          setOrigin(window.location.origin);
          setType('internal');
          return;
        }
        if (
          !url?.includes(oldDomain) &&
          !url?.includes(newDomain) &&
          !url?.includes(window.location.origin)
        ) {
          setOrigin('');
          setType('external');
        }
      }
    }
  }, [url]);

  return { origin, type };
};

export default useCallToAction;
