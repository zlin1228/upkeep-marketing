import React from 'react';

import AnnouncementBarProvider from './src/context/announcementBarContext';
import LightboxProvider from './src/context/lightboxContext';
import ModalProvider from './src/context/modalContext';

import handleCookies from './src/utils/handleCookies';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/fonts/fonts.css';
import './src/stylesheets/main.scss';

export const wrapRootElement = ({ element }) => (
  <AnnouncementBarProvider>
    <ModalProvider>
      <LightboxProvider>{element}</LightboxProvider>
    </ModalProvider>
  </AnnouncementBarProvider>
);

export const onRouteUpdate = ({ prevLocation }) => {
  const internalUrls = ['www.upkeep.com', 'localhost:8000'];

  // Fallback in case `prevLocation` is null
  const referrer = document.referrer;

  // If navigating to a page on the same domain, do nothing
  if (
    internalUrls.some(loc => prevLocation?.href?.includes(loc)) ||
    internalUrls.some(loc => referrer?.includes(loc))
  ) {
    return;
  }

  handleCookies(referrer);
};
