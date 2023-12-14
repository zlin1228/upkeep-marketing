import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import { Container, Row, Link } from './styles/SubscriptionProof';
import subscriptions from './data/subscriptions';

const SubscriptionProof = () => (
  <Container>
    <h5>SUBSCRIBE TO US ON:</h5>
    <Row>
      {subscriptions.map(({ logo, alt, url }) => (
        <Link
          key={alt}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="subscribe_link"
        >
          <GatsbyImage src={logo} alt={alt} />
        </Link>
      ))}
    </Row>
  </Container>
);

export default SubscriptionProof;
