import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 470px;
  height: auto;
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;
