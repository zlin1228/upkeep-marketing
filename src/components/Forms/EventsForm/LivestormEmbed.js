import React from 'react';
import { Container, Heading, Iframe } from './styles/LivestormEmbed';

const LivestormEmbed = ({ heading, src }) => (
  <Container>
    <Heading>{heading || 'Save Your Seat Today'}</Heading>
    <Iframe
      className="livestorm_iframe"
      width="100%"
      height="1000px"
      frameBorder="0"
      src={src}
      title="UpKeep Demo / Q&A [On Demand] | UpKeep"
    />
  </Container>
);

export default LivestormEmbed;
