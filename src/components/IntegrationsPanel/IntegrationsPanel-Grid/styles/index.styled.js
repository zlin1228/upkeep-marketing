import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { spacing } from '../../../../atoms/spacing';
import { containers } from '../../../../atoms/containers';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[48]} 0rem;
  ${atMinWidth.sm`
    padding: ${spacing[64]} 0rem;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[96]} 0rem;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px ${spacing[16]};
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Header = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  margin: 0px auto;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.sm`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;
