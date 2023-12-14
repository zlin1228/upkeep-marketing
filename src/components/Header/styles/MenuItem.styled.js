import styled from 'styled-components';
import { motion } from 'framer-motion';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  width: inherit;
  height: inherit;
  .menu-item {
    width: 100%;
    display: grid;
    grid-template-columns: ${({ fontAwesomeIcon }) =>
      fontAwesomeIcon ? `24px 1fr` : `1fr`};
    align-items: flex-start;
    gap: ${spacing[8]};
  }
  &:hover {
    .heading {
      color: ${({ fontAwesomeIcon }) =>
        fontAwesomeIcon ? color.darkBlue[1000] : color.steel[700]};
    }
  }
`;

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  .decorative-icon {
    use {
      fill: ${({ iconColor, hovered }) =>
        hovered && (iconColor || color.steel[700])};
      stroke: ${({ iconColor, hovered }) =>
        hovered && (iconColor || color.steel[700])};
      color: ${({ iconColor, hovered }) =>
        hovered && (iconColor || color.steel[700])};
    }
  }
`;

export const ArrowWrapper = styled(motion.div)`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  .arrow-icon {
    margin-top: 4px;
    display: ${({ hovered }) => (hovered ? 'flex' : 'none')};
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  .heading-wrapper {
    display: flex;
    gap: 6px;
  }
  .heading {
    ${font('text', 'sm', '600')}
    text-align: left;
    color: ${({ fontAwesomeIcon }) =>
      fontAwesomeIcon ? color.darkBlue[600] : color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'sm', '400')}
    text-align: left;
    color: ${color.darkBlue[600]};
    width: 100%;
  }
`;
