import React from 'react';
import QuoteIcon from '../assets/QuoteIcon';
import {
  Container,
  Wrapper,
  Text,
  Author,
} from '../styles/TertiarySlide.styled';

const TertiarySlide = ({ component }) => (
  <Container>
    <Wrapper>
      <QuoteIcon />
      <Text dangerouslySetInnerHTML={{ __html: component?.quote }} />
      <Author>
        <h6>
          {component?.author?.firstName} {component?.author?.lastName}
        </h6>
        <p>
          {component?.author?.role}, {component?.author?.company?.name}
        </p>
      </Author>
      <QuoteIcon />
    </Wrapper>
  </Container>
);

export default TertiarySlide;
