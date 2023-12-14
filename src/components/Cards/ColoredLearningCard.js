import React, { useRef } from 'react';
import CallToAction from '../CallToAction';
import useIsHovered from '../../hooks/useIsHovered';
import useSwipe from '../CardDeck/utils/useSwipe';
import {
  Container,
  Button,
  Body,
  Text,
} from '../../styles/Components/Cards/ColoredLearningCard.styled';

const ColoredLearningCard = ({ theme, component }) => {
  const cardRef = useRef();
  const { handleClick, handleMouseDown } = useSwipe();
  const isHovered = useIsHovered(cardRef);

  if (!component) return null;
  const { internalName, metaTags, categories } = component;

  return (
    <Container theme={theme} ref={cardRef}>
      <Button
        type="button"
        aria-label="Card Button"
        onMouseDown={e => handleMouseDown(e)}
        onClick={e => handleClick(e, `/learning/${component?.slug}`)}
      />
      <Body>
        <Text theme={theme}>
          {internalName || metaTags?.title ? (
            <p className="heading">{internalName || metaTags?.title}</p>
          ) : null}
          {categories?.length > 0 && (
            <p className="category">{categories[0].name}</p>
          )}
        </Text>
        {metaTags?.description && (
          <p className="subhead">{metaTags.description}</p>
        )}
      </Body>
      <CallToAction
        variant="Arrow-Link-Light"
        icon="fa-solid fa-chevron-right"
        url="/"
        label="View Article"
        classes={isHovered ? 'hovered' : ''}
      />
    </Container>
  );
};

export default ColoredLearningCard;
