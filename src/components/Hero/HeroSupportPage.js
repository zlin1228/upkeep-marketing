import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import SupportSearchBar from '../../molecules/Search/SupportSearchBar';
import {
  Section,
  Wrapper,
  Container,
  Text,
} from './styles/HeroSupportPage.styled';

const HeroSupportPage = ({ component: { heading } }) => (
  <Section>
    <Wrapper>
      <Breadcrumbs theme="Red-Light" />
      <Container>
        {heading && <h1 className="heading">{heading}</h1>}
        <SupportSearchBar />
        <Text>
          Common troubleshooting tips:
          <a href="https://help.onupkeep.com/en/?q=notifications">
            notifications,
          </a>
          <a href="https://help.onupkeep.com/en/?q=data-security">
            data security,
          </a>
          <a href="https://help.onupkeep.com/en/?q=password-reset">
            password reset
          </a>
        </Text>
      </Container>
    </Wrapper>
  </Section>
);

export default HeroSupportPage;
