import React from 'react';
import styled from 'styled-components';

import Icon from '../../../../molecules/Icon';

import { color } from '../../../../atoms/colors';

const Loader = () => {
  return (
    <Spinner>
      <Icon id="fa-solid fa-spinner-third" fillColor={color.darkBlue[1000]} />
    </Spinner>
  );
};

export default Loader;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
