import React from 'react';

import Icon from '../Icon';

import {
  Container,
  Header,
  Svg,
  Subhead,
  iconMap,
} from './styles/index.styled';

const ListItem = ({ theme, icon, heading, subhead }) => (
  <Container>
    <Header theme={theme} className="header">
      {icon && (
        <Svg theme={theme}>
          <Icon
            id={icon}
            width="17px"
            height="17px"
            fillColor={iconMap[theme]}
          />
        </Svg>
      )}
      {heading && <p className="heading">{heading}</p>}
    </Header>
    {subhead && (
      <Subhead theme={theme} dangerouslySetInnerHTML={{ __html: subhead }} />
    )}
  </Container>
);

export default ListItem;
