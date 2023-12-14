import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 186px;
  border: 1px solid ${color.darkBlue[50]};
  background: ${color.common.white};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${atMinWidth.sm`
    min-height: 280px;
  `}
  ${atMinWidth.md`
    min-height: 211px;
  `}
  ${atMinWidth.xl`
    min-height: 141px;
  `}
`;
export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  z-index: 10;
  transition: all 250ms ease-in-out;
  padding: 12px;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  .category {
    ${font('overline', 'sm', '700')}
    color: ${color.common.white};
  }
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .gatsby-image-wrapper {
    width: 150px;
    height: 75px;
    img {
      object-fit: contain !important;
    }
  }
`;
