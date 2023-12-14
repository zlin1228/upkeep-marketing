import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';

import { sizes, variants } from '../../CallToAction/styles/CallToAction.styled';

const eyebrowMap = {
  Light: `color: ${color.steel[800]}`,
  Dark: `color: ${color.steel[200]}`,
  Neutral: `color: ${color.primary[700]}`,
  Red: `color: ${color.primary[700]}`,
  'Blue Linear': `color: ${color.primary[700]}`,
};

const headingMap = {
  Light: `color: ${color.darkBlue[1000]}`,
  Dark: `color: ${color.common.white}`,
  Neutral: `color: ${color.darkBlue[900]}`,
  Red: `color: ${color.darkBlue[900]}`,
  'Blue Linear': `color: ${color.darkBlue[900]}`,
};

const subheadMap = {
  Light: `color: ${color.darkBlue[600]}`,
  Dark: `color: ${color.darkBlue[100]}`,
  Neutral: `color: ${color.darkBlue[600]}`,
  Red: `color: ${color.darkBlue[600]}`,
  'Blue Linear': `color: ${color.darkBlue[600]}`,
};

const primaryButtonMap = {
  Light: variants['Filled - Red'],
  Dark: variants['Filled - Red'],
  Neutral: variants['Filled - Red'],
  Red: variants['Filled - Red'],
  'Blue Linear': variants['Filled - Red'],
};

const secondaryButtonMap = {
  Light: variants['Outline Red - White'],
  Dark: variants['Outline - White'],
  Neutral: variants['Outline Red - White'],
  Red: variants['Outline Red - White'],
  'Blue Linear': variants['Outline Red - White'],
};

export const Container = styled.div`
  width: 100%;
  z-index: 3;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[24]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.lg};
  `}
`;

export const Text = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing[16]};
  margin: ${spacing[0]} auto;
  .eyebrow {
    ${font('overline', 'md', '700')}
    ${({ theme }) => eyebrowMap[theme]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    ${({ theme }) => headingMap[theme]};
    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    &,
    & p {
      ${font('text', 'lg', '400')}
      ${({ theme }) => subheadMap[theme]};
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing[16]};
  margin-top: ${spacing[16]};
  ${atMinWidth.md`
    width: fit-content;
    flex-direction: row;
    margin: 0px auto;
  `}
  a {
    width: 100%;
    ${sizes.xl}
    ${atMinWidth.md`
        width: fit-content;
        ${sizes.xxl}
    `}
  }
  .primary-button {
    ${({ theme }) => primaryButtonMap[theme]};
  }
  .secondary-button {
    ${({ theme }) => secondaryButtonMap[theme]};
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: ${props => (props.fullwidthImage ? 'unset' : '770px')};
  .gatsby-image-wrapper {
    width: 100%:
    height: 100%;
  }
`;

export const Video = styled.div`
  width: 100%;
  max-width: 970px;
`;
