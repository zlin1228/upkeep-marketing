import React from 'react';
import { Container } from '../styles/StatCard.styled';

const StatCard = ({ percentageAmount, description }) => (
  <Container>
    {percentageAmount && <p className="stat-heading">{percentageAmount}</p>}
    {description && (
      <div
        className="stat-subhead"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
  </Container>
);

export default StatCard;
