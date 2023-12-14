import React from 'react';
import { Container, Text } from '../styles/Header.styled';

const Header = ({ component }) => {
  if (!component) return null;
  const { headingKicker, heading, subhead } = component;
  return (
    <Container>
      <Text>
        {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
        {heading && (
          <div
            className="heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
      </Text>
    </Container>
  );
};

export default Header;
