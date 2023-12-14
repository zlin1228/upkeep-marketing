import React from 'react';
import Icon from '../../../molecules/Icon';
import { color } from '../../../atoms/colors';
import {
  Wrapper,
  Heading,
  Subhead,
  IconWrapper,
} from '../styles/GridItem.styled';

const GridItem = ({ component }) => (
  <Wrapper>
    {component?.icon && (
      <IconWrapper>
        <Icon
          id={component?.icon}
          width="14px"
          height="14px"
          fillColor={color.common.white}
        />
      </IconWrapper>
    )}
    {component?.heading && <Heading>{component?.heading}</Heading>}
    {component?.subhead && (
      <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
    )}
  </Wrapper>
);

export default GridItem;
