import styled from 'styled-components';

import { containers } from '../../atoms/containers';
import { spacing } from '../../atoms/spacing';
import { color } from '../../atoms/colors';
import { font } from '../../atoms/typography';
import { shadow } from '../../atoms/shadows';
import { atMinWidth } from '../../atoms/breakpoints';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: ${spacing[96]};
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  background-color: ${color.common.white};
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${spacing[24]};
  border-radius: ${spacing[20]};
  border: 1px solid ${color.steel[25]};
  background-color: ${color.common.white};
  ${shadow('lg', 'dark')}
  .subhead {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .subhead,
  .subhead p {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[700]};
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[16]};
  .heading {
    ${font('display', 'xs', '700')};
    color: ${color.darkBlue[1000]};
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${color.steel[700]};
  padding: ${spacing[12]};
`;
