import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';
import { backgroundImages } from '../../../atoms/backgroundImage';

const backgroundColorMap = {
  white: color.common.white,
  'darkblue-white': `linear-gradient(
    180deg,
    ${color.darkBlue[25]} 67.06%,
    ${color.common.white} 67.06%
  )`,
};

export const accentColorMap = [
  color.yellow[700],
  color.midnight[500],
  color.green[500],
  color.blue[700],
  color.primary[700],
];

export const Section = styled.div`
  position: relative;
  padding: ${spacing[48]} ${spacing[16]};
  background: ${({ theme }) => backgroundColorMap[theme]};
  ${atMinWidth.lg`
    padding: ${spacing[72]} 0;
 `};

  ${atMinWidth.xl`
    padding: ${spacing[96]} 0;
 `};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImages.grid.desktop});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  max-width: 704px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${spacing[48]};
  ${atMinWidth.xl`
     max-width: 800px;
 `};
`;

export const Logo = styled.img`
  width: auto;
  max-height: 34px;
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
  ${atMinWidth.lg` 
     ${font('display', 'md', '700')}
  `}
  ${atMinWidth.xl` 
    ${font('display', 'lg', '700')}
  `}
`;

export const Subheading = styled.p`
  ${font('text', 'lg', '400')}
  color: ${color.darkBlue[600]};
`;

export const SlidesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  position: relative;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  padding: ${spacing[32]} ${spacing[16]};
  margin: 0 auto;
  background: ${color.common.white};
  ${shadow('lg', 'dark')}
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: all 150ms ease-in-out;
    background: ${({ activeIndex }) => accentColorMap[activeIndex]};
  }
  ${atMinWidth.lg`
    max-width: 704px;
    padding: ${spacing[48]} ${spacing[48]};
 `};
  ${atMinWidth.xl`
    max-width: 1216px;
    padding: ${spacing[56]} ${spacing[72]} ${spacing[48]} ${spacing[72]};
 `};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing[16]};
  margin: 0 auto;
  width: 100%;
  ${atMinWidth.lg`
    flex-direction: row;
    button {
      width: max-content;
    }
  `};
`;
