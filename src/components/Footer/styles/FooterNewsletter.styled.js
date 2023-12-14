import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import {
  defaultStyles,
  variants,
  sizes,
} from '../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  margin-bottom: ${spacing[64]};
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[100]};
  }
  .success {
    color: ${color.green[500]};
  }
  .error {
    color: ${color.primary[500]};
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${spacing[16]};
  ${atMinWidth.md`
    flex-direction: row;
  `}
  && input {
    width: 100%;
    height: 48px;
    background: ${color.darkBlue[900]};
    border: 1px solid ${color.darkBlue[200]};
    border-radius: 61px;
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[100]};
    padding: ${spacing[10]} ${spacing[24]};
    margin: ${spacing[0]};
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    &::placeholder {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[300]};
    }
  }
  button {
    ${defaultStyles}
    ${variants['Filled - Red']}
    ${sizes.lg}
    width: 100%;
    white-space: nowrap;
    ${atMinWidth.md`
      width: fit-content;
    `}
  }
`;
