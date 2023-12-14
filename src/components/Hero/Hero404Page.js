import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import { Section, Wrapper } from './styles/Hero404Page.styled';

const Hero404Page = ({ component }) => (
  <Section>
    <Wrapper>
      <GatsbyImage
        src={component?.featuredImage.image.gatsbyImageData}
        alt={component?.featuredImage.image.alt}
      />
    </Wrapper>
  </Section>
);

export default Hero404Page;
