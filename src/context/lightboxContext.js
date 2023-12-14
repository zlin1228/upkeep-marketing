import React, { createContext, useState, useContext } from 'react';

const LightboxContext = createContext();

export const useLightbox = () => useContext(LightboxContext);

const LightboxProvider = ({ children }) => {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const openLightbox = lightbox => setActiveLightbox(lightbox);

  const closeLightbox = () => setActiveLightbox(null);

  return (
    <LightboxContext.Provider
      value={{
        activeLightbox,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
