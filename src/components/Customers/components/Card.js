import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import limitWordCount from '../../../utils/limitWordCount';
import {
  Frame,
  Thumbnail,
  Clickable,
  Details,
  Body,
  TagsWrapper,
  Tags,
  CallToAction,
} from '../styles/Card';

const Card = ({ card }) => (
  <Frame>
    <Clickable to={`/customers/${card?.slug}`} />
    <Thumbnail>
      <GatsbyImage src={card?.metaTags?.image?.url} alt={card?.internalName} />
    </Thumbnail>
    <Body>
      <Details>
        <TagsWrapper>
          <div className="overlay" />
          <Tags>
            <h6>Case Study</h6>
            <h6>{card?.industry?.name}</h6>
          </Tags>
        </TagsWrapper>
        <h5>{card?.internalName}</h5>
        <p>{limitWordCount(card?.excerpt, 20)}</p>
      </Details>
      <CallToAction className="call-to-action" to={`/customers/${card?.slug}`}>
        Learn more
      </CallToAction>
    </Body>
  </Frame>
);

export default Card;
