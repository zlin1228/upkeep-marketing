import React from 'react';
import { color } from '../../../../atoms/colors';
import Icon from '../../../../molecules/Icon';
import { Container } from '../styles/Success.styled';

const Success = () => (
  <Container>
    <Icon
      id="fa-solid fa-circle-check"
      fillColor={color.blue[700]}
      classes="valid-icon"
    />
    <p>Thank you! We'll be in touch soon.</p>
  </Container>
);

export default Success;
