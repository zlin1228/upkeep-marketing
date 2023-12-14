import React from 'react';

import AnnouncementBarProvider from './src/context/announcementBarContext';
import LightboxProvider from './src/context/lightboxContext';
import ModalProvider from './src/context/modalContext';

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
