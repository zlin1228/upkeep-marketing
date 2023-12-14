import React from 'react';
import CallToAction from '../../../CallToAction';
import GatsbyImage from '../../../Image/GatsbyImage';
import { Container, Text, Image } from '../styles/Card.styled';

const Card = ({ headingKicker, heading, callToAction, icon }) => (
  <Container>
    <CallToAction url="/" variant="Clickable" />
    <Text>
      <p className="heading-kicker">{headingKicker}</p>
      <p className="heading">{heading}</p>
      {callToAction?.url && (
        <CallToAction
          url={callToAction.url}
          label={callToAction?.label}
          nextIcon="fa-solid fa-chevron-right"
          variant="Link - Red"
        />
      )}
    </Text>
    <Image>
      <GatsbyImage src={icon?.image?.url} alt={icon?.image?.alt} />
    </Image>
  </Container>
);

export default Card;
