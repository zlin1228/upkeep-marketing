import React, { useRef } from 'react';
import CallToAction from '../CallToAction';
import useIsHovered from '../../hooks/useIsHovered';
import {
  Container,
  Text,
  Footer,
  Tags,
} from '../../styles/Components/Cards/LearningCard.styled';

const LearningCard = ({ component }) => {
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);
  return (
    <Container ref={cardRef} className="learning-card">
      <CallToAction url={`/learning/${component?.slug}`} variant="Clickable" />
      <Text>
        <p className="heading">{component?.metaTags?.title}</p>
        <p className="subhead">{component?.metaTags?.description}</p>
      </Text>
      <Footer>
        <Tags>
          {component?.categories?.map((cat, index) => {
            const lastCat = index === component?.categories?.length - 1;
            return (
              <p key={cat?.id} className="tag">
                {cat?.name}
                {!lastCat && ','}
              </p>
            );
          })}
        </Tags>
        <CallToAction
          url={`/learning/${component?.slug}`}
          variant="Red-Arrow-Link"
          icon="fa-solid fa-chevron-right"
          classes={isHovered ? 'hovered' : ''}
        >
          View Article
        </CallToAction>
      </Footer>
    </Container>
  );
};

export default LearningCard;
