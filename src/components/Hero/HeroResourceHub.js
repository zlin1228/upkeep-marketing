import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import ResourceHubCarousel from '../Carousels/ResourceHubCarousel';
import {
  Section,
  Wrapper,
  Container,
  Text,
  Heading,
  Subhead,
} from './styles/HeroResourceHub.styled';

const HeroResourceHub = ({ component }) => (
  <Section>
    <Wrapper>
      <Breadcrumbs />
      <Text>
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
      </Text>
    </Wrapper>
    <Container>
      <ResourceHubCarousel />
    </Container>
  </Section>
);

export default HeroResourceHub;
