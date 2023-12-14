import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Section = styled.div`
  background: ${({ theme }) =>
    theme === 'White'
      ? color.common.white
      : 'linear-gradient(0deg, #071621 29.36%, #103047 108.07%)'};
  padding: ${spacing[48]} 0;
  overflow: hidden;

  ${atMinWidth.lg`
    padding: ${spacing[73]} 0;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[96]} 0;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 0 17px;

  ${atMinWidth.sm`
   max-width: ${containers.sm};
  `}
  ${atMinWidth.lg`
    padding: 0 ${spacing[32]};
    max-width: ${containers.md};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const SliderWrapper = styled.div`
  overflow: visible;
  .slick-slider {
    overflow: visible;
    padding-bottom: 56px;
    .slick-dashes {
      position: absolute;
      bottom: 4px;
      left: 80px;
      list-style: none;
      display: flex !important;
      gap: 8px;
      li {
        div {
          background: ${color.darkBlue[700]};
          background: ${({ theme }) =>
            theme === 'White' ? color.darkBlue[100] : color.darkBlue[700]};
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        &.slick-active {
          div {
            background: ${({ theme }) =>
              theme === 'White' ? color.steel[700] : color.yellow[800]};
          }
        }
      }
    }
    .slick-list {
      overflow: visible;
      padding: 0px !important;
      .slick-track {
        overflow: visible;
        display: flex;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: ${spacing[32]};
  ${atMinWidth.lg`
    padding-bottom: ${spacing[48]};
  `}
`;

export const Kicker = styled.p`
  ${font('overline', 'md', '700')}
  color: ${({ theme }) =>
    theme === 'White' ? color.steel[800] : color.steel[200]};
`;

export const Heading = styled.h2`
  ${font('display', 'md', '700')}
  color: ${({ theme }) =>
    theme === 'White' ? color.darkBlue[1000] : color.common.white};
  ${atMinWidth.md`
    ${font('display', 'lg', '700')}
  `}
`;
