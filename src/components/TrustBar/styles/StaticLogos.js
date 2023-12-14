import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';

export const StaticContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 2;
`;

const gridMappings = {
  1: 'grid-template-columns: repeat(1, 1fr);',
  2: 'grid-template-columns: repeat(2, 1fr);',
  3: 'grid-template-columns: repeat(3, 1fr);',
  4: 'grid-template-columns: repeat(4, 1fr);',
  5: 'grid-template-columns: repeat(5, 1fr);',
  6: 'grid-template-columns: repeat(3, 1fr);',
  7: `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  8: 'grid-template-columns: repeat(8, 1fr);',
  9: `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  10: 'grid-template-columns: repeat(5, 1fr);',
};

export const StaticLogos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    display: flex;
    flex-wrap: wrap;
  `}

  ${atMinWidth.xxl`
    display: grid;
    ${props => gridMappings[props.logos]}
    justify-content: space-evenly;
    gap: 16px 48px;
  `}
`;

export const LogosWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.gray {
    filter: grayscale(1) brightness(0) opacity(0.3);
  }

  img {
    max-width: 150px;
    height: 100%;
    max-height: 33px;
    object-fit: contain;
  }
`;

export const Logo = styled(Image)`
  &.gray {
    filter: ${props =>
      props.inverted
        ? 'grayscale(1)brightness(0)invert(1)'
        : 'grayscale(1)brightness(0.2)invert(.7)'};
  }

  &.white {
    filter: brightness(0) invert(1);
  }
`;
