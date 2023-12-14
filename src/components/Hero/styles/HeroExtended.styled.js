import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

import heroBackgroundDark from '../../../assets/background/hero-bg-dark.svg';
import heroBackgroundLight from '../../../assets/background/hero-bg-light.svg';
import heroBackgroundBlue from '../../../assets/background/hero-bg-blue.svg';

export const themes = {
  background: {
    Dark: `
      background-image: url(${heroBackgroundDark});
      background-color: #1A1F31;
  `,
    Light: `
      background-image: url(${heroBackgroundLight});
      background-color: #FFFFFF;
  `,
    Blue: `
      background-image: url(${heroBackgroundBlue});
      background-color: #007BFF;
  `,
  },
  text: {
    Dark: 'color: #FFFFFF;',
    Light: 'color: #33394B;',
    Blue: 'color: #FFFFFF;',
  },
  primaryButton: {
    Light: 'Primary',
    Blue: 'Tertiary',
    Dark: 'Primary',
  },
  secondaryButton: {
    Light: 'Secondary',
    Blue: 'Secondary-Light',
    Dark: 'Secondary-Light',
  },
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[56]};
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: cover;
  overflow: hidden;
  ${props => themes.background[props?.theme]};

  ${atMinWidth.md`
    padding: ${spacing[96]} ${spacing[0]} ${spacing[72]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[96]};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[64]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;
export const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  ${atMinWidth.xl`
    flex-direction: row;
  `}
`;

export const Column = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .heading {
    ${font('display', 'md', '700')}
    text-align: center;
    ${props => themes.text[props?.theme]};

    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
      text-align: left;
    `}
  }

  .subhead {
    ${font('text', 'lg', '400')}
    text-align: center;
    ${props => themes.text[props?.theme]};

    ${atMinWidth.xl`
      ${font('text', 'xl', '700')}
      text-align: left;
    `}
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ${atMinWidth.xl`
    flex-direction: column;
    align-items: flex-start;
  `}

  a:first-child {
    margin-right: 16px;

    ${atMinWidth.xl`
    margin-right: 0px;
  `}
  }
`;

export const Button = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 60px;
    text-align: center;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding: 10px 24px;
    margin: 0px 0px 0px 0px;
    border-radius: 6px;
    transition: all 0.3s ease;
    @media (max-width: 992px) {
      width: 100%;
      margin: 0px 0px 16px 0px;
    }
  `;

export const Disclaimer = styled.p`
  ${font('text', 'sm', '400')}
  text-align: center;
  margin: 0px auto 16px auto;
  ${props => themes.text[props?.theme]};

  ${atMinWidth.xl`
    text-align: left;
    margin: 0px 0px 16px;
  `}
`;
