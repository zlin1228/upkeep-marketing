import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import { Section, Wrapper, Text } from './styles/HeroPodcastDetail.styled';

const HeroPodcastDetail = ({ component }) => (
  <Section>
    <Wrapper>
      <Breadcrumbs resource theme="Grid" />
      <Text>
        <p className="eyebrow">
          {component?.headingKicker ? component?.headingKicker : 'Podcast'}
        </p>
        <h1 className="heading">{component?.metaTags?.title}</h1>
        <p className="subhead">{component?.metaTags?.description}</p>
      </Text>
    </Wrapper>
  </Section>
);

export default HeroPodcastDetail;
