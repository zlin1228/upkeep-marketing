import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';

const backgroundMap = {
  light: color.common.white,
  midnight: color.darkBlue[25],
};

export const Container = styled.div`
  width: 100%;
  display: ${({ activeItem, id, hasImage }) => {
    if (activeItem === id && hasImage) return 'flex';
    if (activeItem === id && !hasImage) return 'block';
    return 'none';
  }};
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${({ theme }) =>
    theme === 'midnight' ? spacing[24] : `${spacing[0]}`};
  background: ${({ theme }) => backgroundMap[theme]};
  border-radius: ${spacing[16]};

  ${atMinWidth.xl`
    display: ${({ activeItem, id, hasImage }) => {
      if (activeItem === id && hasImage) return 'grid';
      if (activeItem === id && !hasImage) return 'block';
      return 'none';
    }};
    grid-template-columns: repeat(2, 1fr);
    padding: ${({ theme }) =>
      theme === 'midnight' ? spacing[24] : `${spacing[0]} ${spacing[24]}`};
  `}

  img, .gatsby-image {
    object-fit: contain !important;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[16]};

  a {
    width: 100%;

    ${atMinWidth.md`
      width: auto;
    `}
  }
`;

const headingSizeMap = {
  'display-sm': font('display', 'sm', '700'),
  'text-lg': font('text', 'lg', '700'),
};

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  .eyebrow {
    ${font('text', 'lg', '900')}
    color: ${color.steel[700]};
  }

  .heading {
    ${({ headingSize }) => headingSizeMap[headingSize]}
    color: ${color.darkBlue[1000]};
  }
`;

export const Subhead = styled.div`
  &,
  & * {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;
