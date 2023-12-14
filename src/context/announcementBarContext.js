import React, { useState, useEffect, createContext, useContext } from 'react';

const AnnouncementBarContext = createContext();

export const useAnnouncementBar = () => useContext(AnnouncementBarContext);

const AnnouncementBarProvider = ({ children }) => {
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(null);
  const [announcementBarHeight, setAnnouncementBarHeight] = useState(null);

  useEffect(() => {
    if (announcementBarHeight !== null) {
      setAnnouncementBarHeight(announcementBarHeight);
    } else {
      setAnnouncementBarHeight(null);
    }
  }, [announcementBarHeight]);

  return (
    <AnnouncementBarContext.Provider
      value={{
        setAnnouncementBarHeight,
        announcementBarHeight,
        showAnnouncementBar,
        setShowAnnouncementBar,
      }}
    >
      {children}
    </AnnouncementBarContext.Provider>
  );
};

export default AnnouncementBarProvider;
