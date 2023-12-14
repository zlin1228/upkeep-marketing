import styled from 'styled-components';
import { color } from '../../../../atoms/colors';

export const TextButton = styled.button`
  color: ${color.primary[700]};
  background: none;
  border: none;
  padding: 0px;
  &:active,
  &:focus,
  &:hover {
    background: none;
    border: none;
    outline: none;
    color: ${color.primary[700]};
  }
`;
