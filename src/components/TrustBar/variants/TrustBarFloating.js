import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';

import {
  Container,
  OuterWrapper,
  InnerWrapper,
} from '../styles/TrustBarFloating.styled';

const TrustBarFloating = ({ component }) => {
  if (!component) return null;
  const { headingKicker, company } = component;

  return (
    <Container>
      <OuterWrapper>
        {headingKicker && <p className="heading">{headingKicker}</p>}
        <InnerWrapper>
          {company?.map(({ logo }) => (
            <GatsbyImage
              key={logo?.id}
              src={logo?.image?.url}
              alt={logo?.image?.alt}
            />
          ))}
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
};

export default TrustBarFloating;
