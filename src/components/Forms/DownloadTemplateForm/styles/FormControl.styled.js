import styled from 'styled-components';

import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';
import { font } from '../../../../atoms/typography';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${props => props.hidden && `display: none;`}
  &.hidden {
    display: none;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Label = styled.label`
  display: none;
  visibility: hidden;
  margin: 0px;
`;
export const Astericks = styled.span`
  position: absolute;
  left: 17px;
  top: 35%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  ${font('text', 'sm', '700')}
  color: ${color.primary[1000]};
`;
export const Input = styled.input`
  && {
    width: 100%;
    height: auto;
    padding: 16px 56px 16px 24px;
    margin: 0px 0px 12px;
    border-radius: 8px;
    background: ${color.common.white};
    border: 1px solid ${color.darkBlue[100]};
    ${shadow('xs', 'dark')}
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[300]};
    transition: all 250ms ease-in-out;
    &::placeholder {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[600]};
    }
    &:focus,
    &:hover {
      box-shadow: none;
    }
    &.error {
      border: 1px solid ${color.primary[1000]};
    }
  }
`;
export const ErrorIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 26px;
  transform: translateY(calc(-50% - 6px));
`;
export const ErrorMessage = styled.div`
  ${font('text', 'sm', '400')}
  color: ${color.primary[1000]};
  p {
    ${font('text', 'sm', '400')}
    color: ${color.primary[1000]};
  }
  a {
    ${font('text', 'sm', '400')}
    color: ${color.primary[1000]};
  }
`;
