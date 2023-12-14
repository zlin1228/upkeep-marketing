import { useState, useEffect } from 'react';

const activateGoogleOptimize = async eventId => {
  if (window.dataLayer) {
    await window.dataLayer.push({ event: eventId });
  }
};

const setOptimizeVariant = async (experimentId, variant, setVariant) => {
  const intervalId = setInterval(() => {
    if (window.google_optimize !== undefined) {
      setVariant(window.google_optimize.get(experimentId));
      if (variant || variant !== undefined) clearInterval(intervalId);
    }
  }, 100);
  setTimeout(() => clearInterval(intervalId), 10000);
};

const useGoogleOptimize = (experimentId, eventId) => {
  const [variant, setVariant] = useState(null);
  useEffect(() => {
    activateGoogleOptimize(eventId);
    setOptimizeVariant(experimentId, variant, setVariant);
  }, [experimentId, eventId]);
  return variant;
};

export default useGoogleOptimize;
