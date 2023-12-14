import React from 'react';
import subscriptionData from './data';
import { Container, Wrapper } from './styles/index.styled';

const Subscriptions = ({ heading }) => (
  <Container>
    {heading && <h6>{heading}</h6>}
    <Wrapper className="subcription-links">
      {subscriptionData.map(({ title, url, logo }) => (
        <a
          key={title}
          href={url}
          aria-label={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt={title} />
        </a>
      ))}
    </Wrapper>
  </Container>
);

export default Subscriptions;
