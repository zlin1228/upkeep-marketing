import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  background-color: ${color.midnight[50]};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  padding: ${spacing[32]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.lg`
    padding: ${spacing[32]};
  `}

  .menu-heading {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
    padding: ${spacing[0]} ${spacing[12]};
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}

  ${atMinWidth.xl`
     display: flex;
     flex-direction: column;
  `}

  &:hover .link-dark svg {
    transform: translateX(4px);
  }

  .clickable:focus-visible {
    outline-offset: 12px;
  }
`;

export const Image = styled.div`
  width: 100%;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};

  .link-dark {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: ${spacing[8]};
    ${font('display', 'tiny-xs', '700')}
    color: ${color.darkBlue[1000]};

    svg {
      width: 20px;
      height: 20px;
      transform: translateX(0px);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  .heading {
    ${font('display', 'tiny-xs', '700')}
    text-align: left;
    color: ${color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'md', '400')}
    text-align: left;
    color: ${color.darkBlue[600]};
  }
`;
