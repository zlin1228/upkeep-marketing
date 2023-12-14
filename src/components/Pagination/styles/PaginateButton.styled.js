import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Button = styled.button`
  width: auto;
  height: auto;
  margin: 0px auto;
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    background: transparent;
    outline: none;
    border: none;
    opacity: 0.8;
  }
  span {
    display: block;
    ${font('display', 'xs', '700')}
    color: ${color.primary[700]};
    margin-bottom: 8px;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
