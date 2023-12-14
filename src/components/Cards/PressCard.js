import React, { useRef } from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import useIsHovered from '../../hooks/useIsHovered';
import {
  Container,
  Image,
  Text,
} from '../../styles/Components/Cards/PressCard';

const PressCard = ({ component: { title, source, callToAction } }) => {
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);

  return (
    <Container ref={cardRef}>
      <CallToAction variant="Clickable" url={callToAction?.url} />
      <Image>
        <GatsbyImage
          src={source?.logo?.image?.gatsbyImageData}
          alt={source?.logo?.image?.alt}
        />
      </Image>
      <Text>
        <p className="heading-kicker">{source?.name}</p>
        <p className="heading">{title}</p>
        <CallToAction
          variant="Red-Arrow-Link"
          icon="fa-solid fa-chevron-right"
          url={callToAction?.url}
          label={callToAction?.label}
          classes={isHovered ? 'hovered' : ''}
        />
      </Text>
    </Container>
  );
};

export default PressCard;
