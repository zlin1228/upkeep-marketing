import React, { useState } from 'react';
import styled from 'styled-components';

import GatsbyImage from '../../Image/GatsbyImage';
import InlineVideo from '../../../molecules/InlineVideo';
import FormGenerator from '../../Forms';

const FeatureContent = ({ component, theme, location }) => {
  const [play, setPlay] = useState(false);

  if (!component) return null;

  switch (component?.internal?.type) {
    case 'DatoCmsWebsiteImage':
      return (
        <FeaturedImage>
          <GatsbyImage
            src={component?.image?.gatsbyImageData}
            alt={component?.image?.alt}
          />
        </FeaturedImage>
      );
    case 'DatoCmsVideoModalComponent':
      return (
        <InlineVideo
          youtubeURL={component?.video?.youtubeUrl}
          modalData={component}
          thumbnail={component?.video?.videoThumbnail?.image?.gatsbyImageData}
          openInModal
          customPlayState={play}
          setCustomPlayState={setPlay}
          onChange={() => setPlay(true)}
        />
      );
    case 'DatoCmsWebsiteVideo':
      return (
        <InlineVideo
          youtubeURL={component?.youtubeUrl}
          modalData={component}
          thumbnail={component?.videoThumbnail?.image?.gatsbyImageData}
          openInModal
          customPlayState={play}
          setCustomPlayState={setPlay}
          onChange={() => setPlay(true)}
        />
      );
    case 'DatoCmsWebsiteForm':
      return (
        <FormGenerator
          id={component?.id}
          componentProps={component}
          location={location}
          theme={theme}
          purchasePlan={component?.purchasePlan}
        />
      );
    default:
      return null;
  }
};

export default FeatureContent;

const FeaturedImage = styled.div`
  width: 100%;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  && .gatsby-image-wrapper img,
  && img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
