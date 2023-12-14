import styled from 'styled-components';

import { atMinWidth } from '../../atoms/breakpoints';
import { containers } from '../../atoms/containers';
import { spacing } from '../../atoms/spacing';
import { color } from '../../atoms/colors';
import { richTextStyles } from '../../atoms/typography';

import {
  defaultStyles,
  sizes,
  variants,
} from '../../components/CallToAction/styles/theme.styled';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[56]} 0;
  background-color: ${color.common.white};

  ${atMinWidth.md`
    padding: ${spacing[72]} 0;
  `}

  ${atMinWidth.xl`
    padding: ${spacing[96]} 0;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: 0 ${spacing[16]};
  margin: 0 auto;

  ${atMinWidth.sm`
    padding: 0 ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 28px 1fr 372px;
    gap: ${spacing[44]};

    .social-links, .sidebar {
      position: sticky;
      top: 112px;
      height: fit-content;
    }

    .sidebar {
      padding-left: 60px;
    }
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};

  ${atMinWidth.xl`
    gap: ${spacing[48]};
  `}
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[16]};

  button {
    width: 100%;
    ${defaultStyles}
    ${sizes.md}
    ${variants['Outline - Dark']}

    &.active {
      ${variants['Filled - Dark']}
    }
  }
`;

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  &,
  & * {
    ${richTextStyles}
  }
`;
