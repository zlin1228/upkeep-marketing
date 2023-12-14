import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

import {
  sizes,
  variants,
  defaultStyles,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .error {
    ${font('text', 'sm', '600')}
    color: ${color.common.white};
  }
`;
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  ${atMinWidth.sm`
    flex-direction: row;
    height: 58px;
  `}
  && input {
    width: 100%;
    height: 100%;
    padding: 20.5px 24px;
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[300]};
    background-color: ${color.common.white};
    border-radius: 5px;
    &::placeholder {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[300]};
    }
  }
  button {
    ${defaultStyles}
    ${sizes.xxl}
    ${variants['Filled - White']}
    width: 100%;
    ${atMinWidth.sm`
      width: auto;
    `}
  }
`;
