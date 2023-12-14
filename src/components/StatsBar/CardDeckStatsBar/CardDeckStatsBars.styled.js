import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';
import { containers } from '../../../atoms/containers';
import DashedGrid from '../../../assets/background/dashed-grid.svg';

export const Section = styled.section`
  display: grid;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[48]} 0;
  background-color: ${color.midnight[25]};
  background-image: url(${DashedGrid});
  ${atMinWidth.lg`
  gap: ${spacing[48]};
    padding: ${spacing[72]} 0;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[96]} 0;
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  gap: ${spacing[16]};
  padding: 0 ${spacing[16]};
  margin: 0 auto;
  ${atMinWidth.lg`
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[32]};
    max-width: ${containers.md};
    padding: 0 ${spacing[32]};
    ${({ statsLength }) =>
      statsLength % 2 && css`div:last-child { grid-column: span 2;`}
    
 `}
  ${atMinWidth.xl`
    grid-template-columns: repeat(3, 1fr);
    max-width: ${containers.xl};
    div:last-child {
      grid-column: unset
    } 
 `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: spacing[16];
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${spacing[16]};
  ${atMinWidth.lg`
    padding: 0 ${spacing[32]};
 `}
`;

export const HeadingKicker = styled.p`
  ${font('overline', 'md', '700')}
  color: ${color.steel[800]};
`;

export const Heading = styled.p`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
  ${atMinWidth.lg`
   ${font('display', 'md', '700')}
  `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
  `}
`;

export const Subhead = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  ${atMinWidth.lg`
   ${font('text', 'lg', '400')}
  `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  padding: ${spacing[40]} ${spacing[12]};
  border: 2px solid #007cb0;
  background: linear-gradient(
      220deg,
      rgba(110, 160, 203, 0.1) 6.78%,
      rgba(216, 223, 228, 0) 102.94%
    ),
    #fff;
  ${shadow('xl', 'dark')}
  .heading {
    ${font('display', 'xl', '700')}
    color: ${color.darkBlue[1000]};
  }
  .subhead {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }
`;
