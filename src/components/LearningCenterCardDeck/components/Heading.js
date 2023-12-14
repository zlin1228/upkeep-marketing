import React from 'react';
import { useWindowSize } from 'react-use';

import CallToAction from '../../CallToAction';

import { Container, Wrapper } from '../styles/Heading.styled';

const Heading = ({ eyebrow, heading, subhead, primaryButton }) => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Wrapper>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <h2 className="heading">{heading}</h2>}
        {subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
        {primaryButton && (
          <CallToAction
            variant="Outline Dark - Transparent"
            size={width < 768 ? 'lg' : 'xxl'}
            classes="primary-button"
            nextIcon="fa-solid fa-chevron-right"
            {...primaryButton}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Heading;
