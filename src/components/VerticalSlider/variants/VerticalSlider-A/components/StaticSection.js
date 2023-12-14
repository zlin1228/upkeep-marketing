import React from 'react';
import GatsbyImage from '../../../../Image/GatsbyImage';
import SlideText from './SlideText';
import {
  Container,
  Wrapper,
  Text,
  Image,
} from '../styles/StaticSection.styled';

const StaticSection = ({ component }) => {
  if (!component) return null;
  const { verticalSlides } = component;

  return (
    <>
      {verticalSlides.map(slide => {
        return (
          <Container key={slide?.id}>
            <Wrapper>
              <Text>
                <SlideText {...slide} />
              </Text>
              <Image>
                <GatsbyImage
                  src={slide?.image?.image?.gatsbyImageData}
                  alt={slide?.image?.image?.alt}
                />
              </Image>
            </Wrapper>
          </Container>
        );
      })}
    </>
  );
};

export default StaticSection;
