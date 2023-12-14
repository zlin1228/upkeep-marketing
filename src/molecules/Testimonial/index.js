import React from 'react';
import GatsbyImage from '../../components/Image/GatsbyImage';
import Icon from '../Icon';
import { color } from '../../atoms/colors';
import { Container, Row, Stars, Quote } from './styles/index.styled';

const stars = Array.from({ length: 5 }, (_, i) => i + 1).map(star => (
  <Icon
    key={star}
    id="fa-solid fa-star"
    fillColor={color.yellow[700]}
    width="19px"
    height="19px"
  />
));

const Testimonial = ({ id, theme, quote, hideStars, company }) => {
  const logo =
    theme === 'Light'
      ? company.logo.image.gatsbyImageData
      : company.lightLogo.image.gatsbyImageData;
  if (!quote) return null;
  return (
    <Container id={`Testimonial-${id}`} theme={theme}>
      <Row theme={theme}>
        {logo && (
          <GatsbyImage
            classes="company-logo"
            src={logo}
            alt={company?.lightLogo?.image?.alt}
          />
        )}
        {!hideStars && <Stars>{stars}</Stars>}
      </Row>
      <Row>
        {quote && (
          <Quote dangerouslySetInnerHTML={{ __html: quote }} theme={theme} />
        )}
      </Row>
    </Container>
  );
};

export default Testimonial;
