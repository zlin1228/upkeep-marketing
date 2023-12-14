import { useEffect, useState } from 'react';
import ExitIntent from '../../../utils/exitIntent';
import { getLocalStorage, setLocalStorage } from './localStorage';

const UseExitIntent = id => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const EXIT_INTENT_SEEN = JSON.parse(
      getLocalStorage('exit_intent_seen', id)
    );
    if (!EXIT_INTENT_SEEN) {
      const removeExitIntent = ExitIntent({
        threshold: 5,
        eventThrottle: 100,
        onExitIntent: () => {
          setShowPopup(true);
          setLocalStorage(id);
        },
      });
      return () => removeExitIntent();
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', e => {
        if (e.key === 'Escape') setShowPopup(false);
      });
    }
  });
  const closePopup = () => setShowPopup(false);

  return { showPopup, closePopup };
};

export default UseExitIntent;
