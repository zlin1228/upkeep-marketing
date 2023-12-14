import React from 'react';
import DefaultStatsBar from './DefaultStatsBar/DefaultStatsBar';
import CardDeckStatsBar from './CardDeckStatsBar/CardDeckStatsBar';

const Statsbar = ({ component }) => {
  switch (component?.variant) {
    case 'stats-card-deck':
      return <CardDeckStatsBar component={component} />;
    default:
      return <DefaultStatsBar component={component} />;
  }
};

export default Statsbar;
