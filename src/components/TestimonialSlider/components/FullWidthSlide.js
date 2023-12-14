import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import Stars from '../../TestimonialComponent/components/Stars';
import {
  Container,
  Image,
  Text,
  Quote,
  Author,
} from '../styles/FullWidthSlide.styled';

const FullWidthSlide = ({ component, theme }) => (
  <Container theme={theme}>
    <Image>
      <GatsbyImage
        classes="card-image"
        src={component?.image?.gatsbyImageData}
        alt={component?.image?.alt || 'Testimonial'}
      />
    </Image>
    <Text theme={theme}>
      <Quote
        theme={theme}
        dangerouslySetInnerHTML={{ __html: component?.quote }}
      />
      <Stars rating={5} />
      <Author theme={theme}>
        <p className="name">
          {component?.person?.firstName} {component?.person?.lastName}
        </p>
        <p className="company">{component?.company?.name}</p>
      </Author>
    </Text>
  </Container>
);

export default FullWidthSlide;
