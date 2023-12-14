import styled from 'styled-components';

import { containers } from '../../atoms/containers';
import { atMinWidth } from '../../atoms/breakpoints';
import { font } from '../../atoms/typography';
import { color } from '../../atoms/colors';
import { spacing } from '../../atoms/spacing';
import { shadow } from '../../atoms/shadows';

import {
  defaultStyles,
  sizes,
  variants,
} from '../../components/CallToAction/styles/theme.styled';

export const HeroSection = styled.section`
  width: 100%;
  padding: 96px 0px 32px;
  ${atMinWidth.md`
    padding: 128px 0px 48px;
  `}
`;

export const HeroOuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: ${spacing[0]} ${spacing[16]};
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
    gap: 48px;
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
    gap: 64px;
  `}
`;

export const HeroInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 1fr 370px;
    gap: 100px;
  `}
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.md`
      ${font('text', 'lg', '400')}
    `}
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${spacing[32]};
  ${shadow('xl', 'dark')}
  .heading {
    ${font('text', 'lg', '700')}
    color: ${color.darkBlue[1000]};
  }
  .list {
    width: 100%;
    padding: ${spacing[0]};
    margin: ${spacing[0]};
    list-style: none;
    & .list-item:first-child {
      border-top: 1px solid ${color.darkBlue[100]};
    }
    .list-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: ${spacing[16]} ${spacing[0]};
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
      border-bottom: 1px solid ${color.darkBlue[100]};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  ${defaultStyles}
  ${sizes.lg}
  ${variants['Outline - Dark']}
`;

export const DownloadSection = styled.section`
  width: 100%;
  padding-bottom: ${spacing[64]};
`;

export const DownloadWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[32]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
  .list {
    width: 100%;
    padding: ${spacing[0]};
    margin: ${spacing[0]};
    list-style: none;
  }
  .list-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing[24]} ${spacing[0]};
    border-bottom: 1px solid ${color.darkBlue[100]};
    .heading {
      ${font('text', 'md', '700')}
      color: ${color.darkBlue[1000]};
    }
    .download-button {
      ${defaultStyles}
      ${variants['Link - Dark']}
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${color.steel[700]};
      svg use {
        fill: ${color.common.white};
      }
      &:hover {
        opacity: 0.8;
      }
      ${atMinWidth.md`
        width: auto;
        height: auto;
        background-color: ${color.common.transparent};
        svg use {
          fill: ${color.steel[700]};
        }
      `}
      span {
        display: none;
        ${atMinWidth.md`
          display: inline;
        `}
      }
    }
  }
`;
