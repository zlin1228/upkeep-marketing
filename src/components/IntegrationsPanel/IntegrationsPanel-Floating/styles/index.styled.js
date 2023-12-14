import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { containers } from '../../../../atoms/containers';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';

import GridBackground from '../assets/integrations-panel-grid.png';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing[40]} 0rem;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 47.63%,
      #deebff 47.79%
    ),
    #071621;
  overlay: hidden;
  ${atMinWidth.sm`
    padding: ${spacing[56]} 0rem;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[64]} 0rem;
  `}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  background: url(${GridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[16]};
  margin: 0px auto;
  z-index: 2;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  background: ${color.common.white};
  ${shadow('xxl', 'dark')}
  border-radius: ${spacing[32]};
  overflow: hidden;
  ${atMinWidth.sm`
    gap: ${spacing[56]};
  `}
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  `}
`;

export const Text = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  text-align: center;
  align-items: center;
  padding: ${spacing[32]} ${spacing[16]} ${spacing[0]};
  ${atMinWidth.sm`
    padding: ${spacing[48]} ${spacing[48]} ${spacing[0]};
  `}
  ${atMinWidth.xl`
    align-items: flex-start;
    text-align: left;
    padding: ${spacing[0]} ${spacing[0]} ${spacing[0]} ${spacing[72]};
  `}
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.sm`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    &,
    & p {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${spacing[0]};
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[56]};
  `}
  ${atMinWidth.sm`
    padding: ${spacing[0]};
  `}
`;
