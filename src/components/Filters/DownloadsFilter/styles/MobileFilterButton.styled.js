import styled from 'styled-components';
import { color } from '../../../../atoms/colors';

export const Button = styled.button`
  width: 100%;
  height: auto;
  padding: 12.5px 24px;
  background: none;
  outline: none;
  border: none;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${color.darkBlue[700]};
  &:focus,
  &:hover {
    outline: none;
    background: none;
    color: ${color.darkBlue[700]};
  }
  svg {
    transform: translateY(-1px);
    margin-right: 12px;
    fill: ${color.primary[700]};
    path {
      fill: ${color.primary[700]};
    }
  }
`;
