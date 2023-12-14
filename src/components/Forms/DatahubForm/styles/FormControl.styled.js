import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';
import { font } from '../../../../atoms/typography';
import { spacing } from '../../../../atoms/spacing';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${props => props.hidden && `display: none;`}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
`;

export const Label = styled.label`
  ${font('text', 'sm', '400')}
  color: ${color.darkBlue[700]};
  margin: ${spacing[0]};
`;

export const Astericks = styled.span`
  width: 10px;
  height: 10px;
  ${font('text', 'sm', '700')}
  color: ${color.darkBlue[700]};
`;

export const Input = styled.input`
  && {
    width: 100%;
    height: auto;
    padding: ${spacing[8]} ${spacing[12]};
    margin: ${spacing[0]} ${spacing[0]} ${spacing[12]};
    border-radius: 8px;
    background: ${color.common.white};
    border: 1px solid ${color.darkBlue[100]};
    ${shadow('xs', 'dark')}
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[700]};
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
  width: 20px;
  height: 20px;
  top: 42.5%;
`;

export const ErrorMessage = styled.div`
  ${font('text', 'sm', '400')}
  color: ${color.primary[1000]};
  transform: translateY(-12px);
  p {
    ${font('text', 'sm', '400')}
    color: ${color.primary[1000]};
  }
  a {
    ${font('text', 'sm', '400')}
    color: ${color.blue[700]};
  }
`;
