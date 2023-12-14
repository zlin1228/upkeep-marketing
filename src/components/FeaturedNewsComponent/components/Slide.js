import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import { Frame, Thumbnail, Body, Details, Title } from '../styles/Slide';

const Slide = ({ component }) => (
  <Frame>
    <Thumbnail>
      <GatsbyImage
        src={component?.source?.logo?.image?.gatsbyImageData}
        alt={component?.source?.logo?.image?.alt}
      />
    </Thumbnail>
    <Body>
      <Details>
        <Title>{component?.title}</Title>
      </Details>
      <CallToAction
        url={component?.callToAction?.url}
        label={component?.callToAction?.label}
        variant="Red-Arrow-Link"
        icon="fa-solid fa-chevron-right"
      />
    </Body>
  </Frame>
);

export default Slide;
