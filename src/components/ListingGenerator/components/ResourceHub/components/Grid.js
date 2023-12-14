import React from 'react';
import Card from './Card';
import FullWidthCard from './FullWidthCard';
import { Container } from '../styles/Grid.styled';

const Grid = ({ data, type, layout }) => (
  <Container layout={layout}>
    {data?.map((item, index) => {
      if (index === 0 && layout === '1x3') {
        return (
          <FullWidthCard
            key={item?.id}
            index={index}
            component={{ type, layout, index, ...item }}
          />
        );
      }
      return (
        <Card
          key={item?.id}
          index={index}
          component={{ type, layout, index, ...item }}
        />
      );
    })}
  </Container>
);

export default Grid;
