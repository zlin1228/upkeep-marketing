import React from 'react';
import styled from 'styled-components';

import Lightbox from '../molecules/Lightbox';

import { useAnnouncementBar } from '../context/announcementBarContext';
import { useLightbox } from '../context/lightboxContext';

const Layout = ({ children }) => {
  const { announcementBarHeight } = useAnnouncementBar();
  const { activeLightbox } = useLightbox();

  return (
    <Wrapper height={announcementBarHeight}>
      <Lightbox {...activeLightbox} />
      {children}
    </Wrapper>
  );
};

export default Layout;

export const Wrapper = styled.div`
  padding-top: ${({ height }) => height}px;
`;
