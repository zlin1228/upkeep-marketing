import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import SocialStars from '../../SocialProof/SocialStars';
import logos from '../assets/logos';
import {
  Container,
  Details,
  Rating,
  Title,
  Quote,
  Source,
} from '../styles/Slide.styled';

const Slide = ({ component }) => (
  <Container>
    <Details>
      <Rating>
        <SocialStars />
      </Rating>
      <Title>{component?.title}</Title>
      <Quote dangerouslySetInnerHTML={{ __html: component?.quote }} />
    </Details>
    {component?.source && (
      <Source>
        <GatsbyImage src={logos[component?.source]} alt="company logo" />
        {component?.source}
      </Source>
    )}
  </Container>
);

export default Slide;
