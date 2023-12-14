import React from 'react';
import Stars from './Stars';
import {
  Frame,
  Details,
  Heading,
  Subhead,
  Author,
  Name,
  Role,
} from '../styles/Card.styled';

const Card = ({ component }) => (
  <Frame>
    <Details>
      <Stars rating={5} />
      <Heading>{component?.title}</Heading>
      <Subhead dangerouslySetInnerHTML={{ __html: component?.quote }} />
    </Details>
    <Author>
      <Name>
        {component?.person?.firstName} {component?.person?.lastName}
      </Name>
      <Role>{component?.company?.name}</Role>
    </Author>
  </Frame>
);

export default Card;
