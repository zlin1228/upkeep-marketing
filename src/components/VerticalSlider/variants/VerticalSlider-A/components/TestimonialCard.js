import React from 'react';
import GatsbyImage from '../../../../Image/GatsbyImage';
import { Container, Source, Quote } from '../styles/TestimonialCard.styled';

const TestimonialCard = ({ quote, company }) => {
  if (!quote) return null;
  return (
    <Container>
      {quote && <Quote dangerouslySetInnerHTML={{ __html: quote }} />}
      {company?.logo?.image?.url && (
        <Source>
          <GatsbyImage
            src={company.logo.image.url}
            alt={company?.logo?.image?.alt}
          />
        </Source>
      )}
    </Container>
  );
};

export default TestimonialCard;
