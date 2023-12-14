import React from 'react';

import FooterAccordionItem from './FooterAccordionItem';
import FooterGroup from './FooterGroup';

import { Container, List } from '../styles/FooterAccordion.styled';

const FooterAccordion = ({ data }) => (
  <Container>
    <List>
      {data[0]?.map(item => (
        <FooterAccordionItem key={item.id} data={item} />
      ))}
    </List>
    {data[1]?.map(item => (
      <FooterGroup key={item.id} data={[item]} />
    ))}
  </Container>
);

export default FooterAccordion;
