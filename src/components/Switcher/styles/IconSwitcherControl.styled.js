import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Toggle = styled(motion.button)`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  outline: none;
  border: none;
  padding: 0px;
  &:hover,
  &.active {
    background: none;
    outline: none;
    .icon {
      background: ${color.primary[700]};
    }
    h4 {
      color: ${color.primary[700]};
    }
  }
  &:focus {
    outline: none;
  }
  h4 {
    ${font('display', 'md', '700')}
    color: ${color.mediumGrey[600]};
    margin: 0px;
    text-align: left;
    transition: all 300ms ease-in-out;
    @media (max-width: 499px) {
      font-size: 22px;
      line-height: 24px;
    }
  }
`;
export const IconWrapper = styled.div`
  width: 45px;
  min-width: 45px;
  height: 45px;
  background: ${color.mediumGrey[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 8px;
  transition: all 300ms ease-in-out;
  &.active {
    background: ${color.primary[700]};
  }
`;
export const Details = styled(motion.div)`
  padding-left: 57px;
  .subhead {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
    margin: 0px 0px 8px 0px;
    p,
    span {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[600]};
      margin: 0px;
    }
  }
`;
