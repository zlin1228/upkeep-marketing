import React from 'react';

import GatsbyImage from '../../Image/GatsbyImage';

import { Container, Logo, Wrapper, Overlay } from '../styles/ScrollingLogos';

export default ({ logos, theme, background }) => {
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <Container background={background}>
      <Overlay alignment="left" />
      <Wrapper>
        {scrollingLogos?.map(({ id, logo }) => (
          <Logo key={id} className={theme}>
            <GatsbyImage src={logo?.image?.url} alt={logo?.logo?.image?.alt} />
          </Logo>
        ))}
      </Wrapper>
      <Overlay alignment="right" />
    </Container>
  );
};
