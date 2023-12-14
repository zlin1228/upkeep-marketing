import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Subscription from '../Forms/Subscription';
import { Container, Logo, Heading, Form, themes } from './styles/index';

const ConversionBox = ({ component, theme = 'light' }) => (
  <Container theme={theme}>
    {component?.showUpkeepLogo && (
      <Logo>
        <GatsbyImage src={themes[theme]?.logo} alt="UpKeep Logo" />
      </Logo>
    )}
    <Heading theme={theme}>{component?.heading}</Heading>
    {component?.showSubscriptionForm && (
      <Form theme={theme}>
        <Subscription />
      </Form>
    )}
  </Container>
);

export default ConversionBox;
