import React from 'react';
import {
  Card,
  Thumbnail,
  Clickable,
  CallToAction,
  CardBody,
} from '../styles/HardwareCard';

const HardwareCard = ({ card }) => (
  <Card>
    <Clickable to="/" />
    <Thumbnail>
      <img
        src="https://www.datocms-assets.com/38028/1621056593-hardware-fallback.png"
        alt={card?.title}
      />
    </Thumbnail>
    <CardBody>
      <h5 className="title">{card?.title}</h5>
      <p className="price_details">{card?.price}</p>
      <p className="description">{card?.description}</p>
      <CallToAction to={card?.callToAction?.url} className="call_to_action">
        {card?.callToAction?.label}
      </CallToAction>
    </CardBody>
  </Card>
);

export default HardwareCard;
