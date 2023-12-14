import React from 'react';
import {
  Wrapper,
  Heading,
  Subhead,
} from './styles/HeroMaintenanceCalculcatorsPage.styled';

const HeroMaintenanceCalculatorsPage = ({ component }) => (
  <Wrapper>
    <Heading>{component?.heading}</Heading>
    <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
  </Wrapper>
);
export default HeroMaintenanceCalculatorsPage;
