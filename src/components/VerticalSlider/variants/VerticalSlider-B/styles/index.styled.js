import styled from 'styled-components';

import { containers } from '../../../../../atoms/containers';
import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  background-color: ${color.darkBlue[25]};
  padding: ${spacing[48]} ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[72]} ${spacing[0]} ${spacing[96]};
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[0]};

  ${atMinWidth.xl`
    gap: ${spacing[24]};
  `}
`;

export const Heading = styled.div`
  width: 100%;
  max-width: ${containers.md};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.sm`
    max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[0]};

  ${atMinWidth.sm`
    gap: ${spacing[32]};
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column-reverse;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  z-index: 1;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 592px 1fr;
    gap: ${spacing[0]};
  `}
`;

export const TextTrack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageTrack = styled.div`
  display: none;
  position: relative;

  ${atMinWidth.xl`
    display: flex;
    flex-direction: column;
    overflow: visible;
  `}
`;

export const StickyImageContainer = styled.div`
  position: sticky;
  top: 250px;
  width: 100%;
  height: ${props => props.imageHeight}px;
`;

export const StickyImageWrapper = styled.div`
  positon: relative;
  width: 100%;
  height: 100%;
  padding: ${spacing[32]} ${spacing[0]};
`;

export const ImageWrapper = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  opacity: 0;
  transition: opacity 250ms ease-in-out;

  ${atMinWidth.xl`
    height: ${props => props.imageHeight}px;
  `}

  &.active {
    display: block;
    opacity: 1;
  }

  img,
  .gatsby-image {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`;
