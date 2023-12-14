import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';

import {
  defaultStyles,
  variants,
  sizes,
} from '../../CallToAction/styles/theme.styled';

const bgColor = {
  light: color.steel[100],
  dark: color.steel[700],
};

const textColor = {
  light: color.grey[600],
  dark: color.steel[25],
};

const IconTheme = {
  light: { background: color.common.white, fill: color.grey[700] },
  dark: { background: color.steel[800], fill: color.common.white },
};

const closeIcon = {
  light: color.darkBlue[500],
  dark: color.common.white,
};

export const CtaTheme = {
  dark: { primary: 'Filled - Dark', secondary: 'Outline - Dark' },
  light: { primary: 'Outline - Dark', secondary: 'Outline Dark - Midnight' },
};

export const Bar = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 56px;
  background-color: ${props => bgColor[props.theme]};
  z-index: 1000;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  ${atMinWidth.md`
    flex-direction: row;
    justify-content: ${props =>
      props.variant === 'simple' ? 'center' : 'space-between'};
    max-width: 830px;
  `}
  ${atMinWidth.xl`
    max-width: 1248px;
  `}
`;

export const Heading = styled.div`
  &,
  & * {
    ${font[('text', 'md', '400')]}
    color: ${props => textColor[props.theme]};
  }

  & strong {
    font-weight: 700;
  }

  & a {
    text-decoration: underline;

    &:hover {
      color: ${props => textColor[props.theme]};
      text-decoration: underline;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};
  max-width: 90%;
  ${atMinWidth.md`
    max-width: 50%;
    flex-direction: row;
    align-items: center;
  `}
  ${atMinWidth.xl`
    max-width: 100%;
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 48px;
  max-height: 48px;
  padding: ${spacing[12]};
  border-radius: 10px;
  background-color: ${props => IconTheme[props.theme].background};
  svg {
    use {
      fill: ${props => IconTheme[props.theme].fill};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[18]};
  a {
    max-height: 48px;
    width: 100%;
  }
  ${atMinWidth.md`
    flex-direction: row;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  padding: 0;
  border: none;
  &:hover {
    background-color: transparent;
  }
  svg {
    use {
      fill: ${props => closeIcon[props.theme]};
    }
  }
  ${atMinWidth.md`
    ${props => props.variant !== 'simple' && 'position: unset;'}
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};
  width: 100%;
  ${atMinWidth.md`
    flex-direction: row;
    gap: ${spacing[16]};
  `}
`;

export const SubmitBtn = styled.button`
  ${defaultStyles}
  ${props => variants[CtaTheme[props.theme].primary]}
  ${sizes.lg}
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  height: 0px;
  width: 0px;
  visibility: hidden;
  margin: 0px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid ${color.common.white};
  background: ${color.common.white};
  box-shadow: ${shadow('xs', 'dark')};
  padding: ${spacing[14]};
  width: 100%;
  &::placeholder {
    ${font[('text', 'md', '400')]}
    color: ${color.grey[500]};
  }
  ${atMinWidth.md`
    width: unset;
  `}
`;
