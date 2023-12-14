import React from 'react';
import {
  Frame,
  Clickable,
  Thumbnail,
  Body,
  Details,
  Heading,
  Subhead,
  CallToAction,
} from '../../styles/Components/Cards/StaticCard';

const StaticCard = ({ card }) => (
  <Frame className="simple-card-frame">
    <Clickable to={card?.callToAction?.url} />
    {card?.image?.url && (
      <Thumbnail className="simple-card-thumbnail">
        <img
          className="simple-card-image"
          src={card?.image?.url}
          alt={card?.image?.alt}
        />
      </Thumbnail>
    )}
    <Body className="simple-card-body">
      <Details className="simple-card-details">
        <Heading className="simple-card-heading">{card?.heading}</Heading>
        <Subhead
          className="simple-card-subhead"
          dangerouslySetInnerHTML={{ __html: card?.subhead }}
        />
      </Details>
      {card?.callToAction?.url && (
        <CallToAction
          to={card?.callToAction?.url}
          className="simple-card-cta animated-cta"
        >
          {card?.callToAction?.label}
        </CallToAction>
      )}
    </Body>
  </Frame>
);

export default StaticCard;
