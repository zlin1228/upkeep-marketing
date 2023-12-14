import React from 'react';

import CallToAction from '../../../../CallToAction';

import { Container } from '../styles/Heading.styled';

const Header = ({ data }) => {
  const { headingKicker, heading, subhead, callToAction } = data;

  if (!headingKicker && !heading && !subhead && !callToAction) {
    return null;
  }

  return (
    <Container>
      {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
      {heading && <p className="heading">{heading}</p>}
      {subhead && (
        <div
          className="subhead"
          dangerouslySetInnerHTML={{ __html: subhead }}
        />
      )}
      {callToAction?.url && (
        <CallToAction
          scrollId={callToAction.url}
          duration={700}
          offset={-100}
          label={callToAction?.label}
          variant="Link - Steel"
          icon="fa-solid fa-chevron-right"
        />
      )}
    </Container>
  );
};

export default Header;
