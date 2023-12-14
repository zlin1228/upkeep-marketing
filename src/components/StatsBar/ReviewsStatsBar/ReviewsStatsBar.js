import React from 'react';
import SocialStars from '../../SocialProof/SocialStars';
import { Container, Rating, Stat } from './ReviewsStatsBar.styled';

const ReviewsStatsBar = ({ stats }) => (
  <Container>
    {stats.map((item, index) => (
      <Stat key={item?.id}>
        <Rating color={index}>
          {item?.percentageAmount === '5 Stars' ? (
            <SocialStars />
          ) : (
            <strong>{item?.percentageAmount}</strong>
          )}
        </Rating>
        <div dangerouslySetInnerHTML={{ __html: item?.description }} />
      </Stat>
    ))}
  </Container>
);

export default ReviewsStatsBar;
