import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
`;
export const Checkbox = styled.button`
  width: 18px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[100]};
  ${shadow('xs', 'dark')};
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    outline: none;
    border: 1px solid ${color.mediumGrey[100]};
    ${shadow('xs', 'dark')};
  }
  &.checked {
    background: ${color.primary[700]};
  }
`;
export const Text = styled.p`
  ${font('text', 'sm', '400')}
  color: ${color.darkBlue[600]};
  a {
    color: ${color.primary[700]};
  }
`;
export const ErrorMessage = styled.div`
  ${font('text', 'sm', '400')}
  color: ${color.primary[1000]};
  margin-bottom: 12px;
  p {
    ${font('text', 'sm', '400')}
    color: ${color.primary[1000]};
  }
  a {
    ${font('text', 'sm', '400')}
    color: ${color.blue[700]};
  }
`;
