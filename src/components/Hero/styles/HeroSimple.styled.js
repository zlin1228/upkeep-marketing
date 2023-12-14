import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

import { defaultStyles } from '../../CallToAction/styles/theme.styled';

import {
  backgroundMappings,
  headingKickerMap,
  headingMap,
  subheadMap,
} from './Hero.styled';

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: cover;
  ${({ theme }) => theme && backgroundMappings[theme]}
  padding: 100px 0px 48px;

  ${atMinWidth.md`
    padding: 100px 0px 72px;
 `}

  ${atMinWidth.xl`
    padding: 112px 0px 96px;
  `}
`;

export const Border = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: radial-gradient(
    ellipse farthest-corner at center center,
    #007cb0 24%,
    transparent 73%
  );
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: ${spacing[0]} auto;
  padding: 0px ${spacing[16]};
  z-index: 10;

  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 546px;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.md`
    gap: ${spacing[24]};
  `}

  ${atMinWidth.xl`
    max-width: 800px;
  `}

  .eyebrow {
    ${font('overline', 'lg', '700')}
    text-align: center;
    ${({ theme }) => theme && headingKickerMap[theme]}
  }

  .heading {
    ${font('display', 'md', '700')}
    text-align: center;
    ${({ theme }) => theme && headingMap[theme]}

    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}

    ${atMinWidth.xl`
      ${font('display', 'xl', '700')}
    `}
  }

  .subhead {
    &,
    & p,
    & span,
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      ${font('text', 'lg', '400')}
      text-align: center;
      ${({ theme }) => theme && subheadMap[theme]}

      ${atMinWidth.md`
        ${font('text', 'xl', '400')}
      `}
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    flex-direction: row;
  `}
`;

export const Button = css`
  width: 100%;
  ${defaultStyles}
  ${font('display', 'tiny-sm', '700')}
  ${atMinWidth.sm`
    width: fit-content;
  `}
`;

export const DisclaimerWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${spacing[0]} auto;
`;

export const Disclaimer = styled.p`
  ${font('text', 'sm', '400')}
  ${props => subheadMap[props?.theme]}
`;
