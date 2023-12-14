import React, { useState } from 'react';
import Controls from './Controls';
import Slide from './Slide';
import GatsbyImage from '../../../../Image/GatsbyImage';
import {
  Container,
  Wrapper,
  Column,
  Image,
} from '../styles/StickySection.styled';

const StickySection = ({ component }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  if (!component) return null;
  const { verticalSlides } = component;

  return (
    <Container>
      <Controls {...component} activeSlideIndex={activeSlideIndex} />
      <Wrapper>
        <Column>
          <Image>
            {verticalSlides.map((slide, index) => (
              <GatsbyImage
                key={slide?.id}
                classes={index === Number(activeSlideIndex) ? 'active' : ''}
                src={slide?.image?.image?.gatsbyImageData}
                alt={slide?.image?.image?.alt}
              />
            ))}
          </Image>
        </Column>
        <Column>
          {verticalSlides.map((slide, index) => (
            <Slide
              key={slide?.id}
              id={`slide-${index}`}
              component={slide}
              setActiveSlideIndex={setActiveSlideIndex}
            />
          ))}
        </Column>
      </Wrapper>
    </Container>
  );
};

export default StickySection;
