import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0px;
  margin: 0px;
  opacity: 1;
  ${font('text', 'md', '700')}
  color: ${({ theme }) =>
    theme === 'dark' ? color.darkBlue[900] : color.common.white};
  transition: opacity 250ms ease-in-out;

  ${({ render }) =>
    !render &&
    css`
      opacity: 0;
      pointer-events: none;
    `}}

  &,
  use {
    transition: all 0.2s ease-in-out;
  }
  
  &:hover {
    opacity: 0.5;
  }

  &:focus {
    outline: 3px solid ${color.steel[700]};
    outline-offset: 6px;
  }
`;
