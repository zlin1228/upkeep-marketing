import React from 'react';
import Lottie from '../../components/Lottie/Lottie';
import LoaderLottie from './data/loader-lottie.json';
import { Container, Text } from './styles/index.styled';

const Loader = ({ text }) => (
  <Container>
    {text && <Text>{text}</Text>}
    <Lottie animation={LoaderLottie} />
  </Container>
);

export default Loader;
