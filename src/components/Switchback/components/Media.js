import React from 'react';

import GatsbyImage from '../../Image/GatsbyImage';
import InlineVideo from '../../../molecules/InlineVideo';

import { Container } from '../styles/Media.styled';

const Media = ({ reference, reverse, layout }) => (
  <Container reference={reference} reverse={reverse} layout={layout}>
    {reference?.__typename === 'DatoCmsWebsiteImage' && (
      <GatsbyImage
        src={reference?.image?.gatsbyImageData}
        alt={reference?.image?.alt}
      />
    )}
    {reference?.__typename === 'DatoCmsWebsiteVideo' && (
      <InlineVideo
        youtubeURL={reference?.youtubeUrl}
        thumbnail={reference?.videoThumbnail?.image?.gatsbyImageData}
      />
    )}
  </Container>
);

export default Media;
