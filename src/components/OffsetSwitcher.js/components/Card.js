import React from 'react';
import Icon from '../../../molecules/Icon';
import { color } from '../../../atoms/colors';
import {
  Frame,
  CardHeading,
  Subhead,
  IconContainer,
  HeadingWrapper,
} from '../styles/Card.styled';

const Card = ({ card, id, onCategoryClick }) => (
  <Frame onClick={() => onCategoryClick(id)}>
    <HeadingWrapper>
      <IconContainer>
        <Icon
          id={card?.fontAwesomeIcon}
          fillColor={color.common.white}
          width="16px"
          height="16px"
        />
      </IconContainer>
      <CardHeading>{card?.heading}</CardHeading>
    </HeadingWrapper>
    <Subhead>{card?.subhead}</Subhead>
  </Frame>
);

export default Card;
