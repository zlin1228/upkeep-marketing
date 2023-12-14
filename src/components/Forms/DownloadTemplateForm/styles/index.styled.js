import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { shadow } from '../../../../atoms/shadows';
import {
  defaultStyles,
  variants,
  sizes,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${color.common.white};
  border: 1px solid ${color.steel[25]};
  ${shadow('xl', 'dark')}
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  && input {
    margin-bottom: 12px;
  }
  & input:not([name='email']) {
    display: none !important;
  }
`;
export const Button = styled.button`
  width: 100%;
  text-align: center;
  transition: all 250ms ease-in-out;
  ${defaultStyles}
  ${variants['Filled - Dark']}
  ${sizes.xxl}
  margin-top: 12px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  .use-policy {
    p {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[1000]};
      text-align: center;
    }
    a {
      ${font('text', 'sm', '400')}
      color: ${color.steel[700]};
    }
  }
`;
