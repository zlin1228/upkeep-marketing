import React from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';

import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Text,
  Image,
} from './styles/HeroTemplatesPage.styled';

const HeroTemplatesPage = ({ component }) => (
  <Section>
    <OuterWrapper>
      <Breadcrumbs theme="Light" />
      <InnerWrapper>
        <Text>
          <p
            className="heading-kicker"
            dangerouslySetInnerHTML={{ __html: component?.headingKicker }}
          />
          <h1
            className="heading"
            dangerouslySetInnerHTML={{ __html: component?.heading }}
          />
          <p
            className="subhead"
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        </Text>
        <Image>
          <GatsbyImage
            src={component?.featuredImage?.image?.gatsbyImageData}
            alt={component?.featuredImage?.image?.alt || ''}
          />
        </Image>
      </InnerWrapper>
    </OuterWrapper>
  </Section>
);

export default HeroTemplatesPage;
