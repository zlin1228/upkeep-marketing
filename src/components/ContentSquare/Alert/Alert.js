import React from 'react';
import {
  AlertWrapper,
  DetailsWrapper,
  Heading,
  Subhead,
  ButtonWrapper,
  Button,
} from './styles/Alert.styled';

const Alert = ({ active, setActive }) => (
  <AlertWrapper active={active}>
    <DetailsWrapper>
      <Heading>www.upkeep.com says</Heading>
      <Subhead>You have chosen to opt-out of Content Square Tracking</Subhead>
    </DetailsWrapper>
    <ButtonWrapper>
      <Button onClick={() => setActive(false)}>Okay</Button>
    </ButtonWrapper>
  </AlertWrapper>
);

export default Alert;
