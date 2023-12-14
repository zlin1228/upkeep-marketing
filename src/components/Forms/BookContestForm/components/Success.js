import React from 'react';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';
import { Container } from '../styles/Success.styled';

const Success = () => (
  <Container>
    <Icon
      id="fa-solid fa-circle-check"
      fillColor={color.primary[700]}
      classes="valid-icon"
    />
    <p>Thank you for your entry! We will draw winners on June 1st.</p>
  </Container>
);

export default Success;
