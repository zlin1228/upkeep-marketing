import { motion } from 'framer-motion';
import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 15px;
`;

export const Button = styled(motion.button)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  background: ${color.darkGrey[25]};
  border: 1px solid ${color.darkGrey[200]};
  border-radius: 4px;
  padding: 24px 32px;
  outline: 1px solid ${color.common.transparent};
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus,
  &.active {
    background: ${color.darkGrey[25]};
    border: 1px solid ${color.primary[700]};
    outline: 1px solid ${color.primary[700]};
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[900]};
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: unset;
  }
`;
export const Badge = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  border-radius: 3px;
  text-align: center;
  padding: 8px 16px;
  ${font('overline', 'md', '600')}
  background: ${color.steel[50]};
  color: ${color.steel[900]};
  @media (max-width: 400px) {
    text-align: left;
  }
`;
export const Subhead = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  text-align: left;
`;
