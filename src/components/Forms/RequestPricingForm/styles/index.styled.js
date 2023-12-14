import styled, { css } from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { shadow } from '../../../../atoms/shadows';

import {
  variants,
  sizes,
  defaultStyles,
} from '../../../CallToAction/styles/theme.styled';

const ZoomInfoStyles = css`
  form[data-zi-mapped-form]
    input:not([type='email']):not([type='submit']):not([type='checkbox']):not([name='firstname']):not([name='lastname']):not([name='industry']),
  .flag-dropdown {
    display: none;
  }

  form[data-zi-mapped-form] h6 {
    display: block !important;
  }

  form[data-zi-mapped-form] input[data-zi-input-enriched='false'] {
    display: block !important;
  }
  form[data-zi-mapped-form] input[data-zi-input-enriched='true'] {
    display: none;
  }

  form[data-zi-mapped-form] input[name='email'][data-zi-input-enriched='true'],
  form[data-zi-mapped-form]
    input[name='firstname'][data-zi-input-enriched='true'],
  form[data-zi-mapped-form]
    input[name='lastname'][data-zi-input-enriched='true'],
  form[data-zi-mapped-form]
    input[name='industry'][data-zi-input-enriched='true'] {
    display: block !important;
  }

  /* Hidden Fields - All Forms */
  form[data-zi-mapped-form] input[name='companyname'],
  form[data-zi-mapped-form] input[name='companysize'],
  form[data-zi-mapped-form] input[name='jobtitle'],
  form[data-zi-mapped-form] input[name='industrydetail'] {
    display: none !important;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: ${spacing[32]};
  background: ${color.common.white};
  border: 1px solid ${color.steel[400]};
  border-radius: ${spacing[8]};
  ${shadow('xl', 'dark')}
  ${ZoomInfoStyles};
`;
export const Heading = styled.p`
  ${font('display', 'md', '700')}
  color: ${color.darkBlue[1000]};
  text-align: center;
`;
export const Subhead = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  text-align: center;
`;
export const Policy = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: ${spacing[8]};
  input {
    appearance: auto;
    outline: black;
    cursor: pointer;
    margin-top: ${spacing[4]};
    &:checked {
      accent-color: ${color.primary[700]};
    }
  }
  ${font('text', 'sm', '400')}
  color: ${color.darkBlue[700]};
  a {
    display: contents;
    color: ${color.steel[700]};
  }
`;
export const Button = styled.button`
  width: 100%;
  ${defaultStyles}
  ${variants['Filled - Red']}
  ${sizes.md}
`;
