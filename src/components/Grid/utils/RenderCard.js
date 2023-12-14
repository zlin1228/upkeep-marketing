import React from 'react';
import CustomersCard from '../../Customers/components/Card';
import ResourceCard from '../../Cards/ResourceCard';
import PodcastCard from '../../Cards/PodcastCard';
import StaticCard from '../../Cards/StaticCard';
import TeamMemberCard from '../../Cards/TeamMemberCard';

export default (type, key, card, theme) => {
  const cardTypes = {
    customers: <CustomersCard key={key} card={card} />,
    downloads: <ResourceCard key={key} item={card} contentType="Downloads" />,
    podcasts: (
      <PodcastCard key={key} card={card} contentType="Podcast" theme={theme} />
    ),
    staticCard: <StaticCard key={key} card={card} />,
    teamMember: <TeamMemberCard key={key} card={card} />,
  };
  return cardTypes[type];
};
