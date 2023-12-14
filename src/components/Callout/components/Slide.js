import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction/index';
import {
  Frame,
  Thumbnail,
  Details,
  Heading,
  Subhead,
} from '../styles/Slide.styled';

const Slide = ({ component }) => (
  <Frame>
    <Thumbnail className="thumbnail">
      <GatsbyImage
        src={component?.image?.gatsbyImageData}
        alt={component?.image?.alt || component?.heading}
      />
    </Thumbnail>
    <Details>
      <div className="text">
        <Heading className="heading">{component?.heading}</Heading>
        <Subhead>{component?.subhead}</Subhead>
      </div>
      <CallToAction
        url={component?.callToAction?.url}
        label={component?.callToAction?.label}
        variant="Red-Arrow-Link"
        icon="fa-solid fa-chevron-right"
      />
    </Details>
  </Frame>
);

export default Slide;
