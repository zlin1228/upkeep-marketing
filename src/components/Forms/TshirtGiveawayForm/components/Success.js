import React from 'react';
import { color } from '../../../../atoms/colors';
import Icon from '../../../../molecules/Icon';
import { Container } from '../styles/Success.styled';

const Success = () => (
  <Container>
    <Icon
      id="fa-solid fa-circle-check"
      fillColor={color.primary[700]}
      classes="valid-icon"
    />
    <p>Thank you for your entry!</p>
  </Container>
);

export default Success;
