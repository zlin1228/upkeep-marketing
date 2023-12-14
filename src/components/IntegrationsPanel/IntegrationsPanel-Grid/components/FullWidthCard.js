import React from 'react';
import GatsbyImage from '../../../Image/GatsbyImage';
import CallToAction from '../../../CallToAction';
import integrationLogos from '../assets/integrations-grid.png';
import { Container, Text, Image } from '../styles/FullWidthCard.styled';

const FullWidthCard = () => (
  <Container>
    <CallToAction url="/" variant="Clickable" />
    <Text>
      <p className="heading-kicker">Integrations with UpKeeep</p>
      <p className="heading">
        Level up your management with powerful integrations to UpKeep.
      </p>
      <CallToAction
        url="/"
        label="View all integrations"
        nextIcon="fa-solid fa-chevron-right"
        variant="Link - Red"
      />
    </Text>
    <Image>
      <GatsbyImage src={integrationLogos} alt="Integrations" />
    </Image>
  </Container>
);

export default FullWidthCard;
