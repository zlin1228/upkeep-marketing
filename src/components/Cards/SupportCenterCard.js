import React from 'react';
import {
  Frame,
  Clickable,
  Icon,
  Heading,
  Subhead,
} from '../../styles/Components/Cards/SupportCenterCard';

const SupportCenterCard = ({ card, theme }) => (
  <Frame theme={theme} clickable={card?.url}>
    {card?.url && <Clickable href={card?.url} />}
    {card?.icon?.logo && (
      <Icon color={card?.icon?.color}>{card?.icon?.logo}</Icon>
    )}
    {card?.title && <Heading>{card?.title}</Heading>}
    {card?.description && (
      <Subhead dangerouslySetInnerHTML={{ __html: card?.description }} />
    )}
  </Frame>
);

export default SupportCenterCard;
