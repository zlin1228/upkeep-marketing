import React from 'react';
import { CardFrame, Heading, Subhead } from '../styles/ShowcaseCard.styled';

const ShowcaseCard = ({ showcaseItem }) => (
  <CardFrame>
    <Heading>{showcaseItem?.heading}</Heading>
    <Subhead dangerouslySetInnerHTML={{ __html: showcaseItem?.subhead }} />
  </CardFrame>
);

export default ShowcaseCard;
