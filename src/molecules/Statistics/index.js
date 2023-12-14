import React from 'react';

import { Container, Item } from './styles/index.styled';

const Statistics = ({ statistics, theme }) => (
  <Container theme={theme}>
    {statistics?.map(({ id, heading, subhead }) => (
      <Item key={id} theme={theme}>
        {heading && (
          <span
            className="heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {subhead && (
          <span
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
      </Item>
    ))}
  </Container>
);

export default Statistics;
