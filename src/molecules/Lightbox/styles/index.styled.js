import styled from 'styled-components';
import { motion } from 'framer-motion';

import { spacing } from '../../../atoms/spacing';

export const Container = styled(motion.div)`
  position: fixed;
  inset: ${spacing[0]};
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Close = styled.div`
  width: 50px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.div`
  width: ${spacing[24]};
  height: ${spacing[24]};
  display: flex;
  align-items: center;
  justify-content: center;

  use {
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    use {
      opacity: 0.5;
    }
  }
`;
