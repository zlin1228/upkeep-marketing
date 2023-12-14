import React from 'react';
import {
  StaticContainer,
  StaticLogos,
  LogosWrapper,
  Logo,
} from '../styles/StaticLogos';

export default ({ logos, theme, background, variant }) => (
  <StaticContainer
    className="static-wrapper"
    background={background}
    variant={variant}
  >
    <StaticLogos logos={logos?.length}>
      {logos.map(
        item =>
          item?.logo?.image?.url && (
            <LogosWrapper key={item?.logo?.id}>
              <Logo
                fluid
                loading="lazy"
                width="120px"
                height="70px"
                src={item?.logo?.image?.url}
                alt={item?.logo?.image?.alt}
                className={theme}
              />
            </LogosWrapper>
          )
      )}
    </StaticLogos>
  </StaticContainer>
);
