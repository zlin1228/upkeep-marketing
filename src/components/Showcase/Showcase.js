import React from 'react';
import shortid from 'shortid';
import { Section, Wrapper } from './styles/Showcase.styled';
import ShowcaseCard from './components/ShowcaseCard';

const Showcase = ({ component }) => (
  <Section>
    <Wrapper>
      {component?.showcaseItems.map(showcaseItem => (
        <ShowcaseCard key={shortid()} showcaseItem={showcaseItem} />
      ))}
    </Wrapper>
  </Section>
);

export default Showcase;
