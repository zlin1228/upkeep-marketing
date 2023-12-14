import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.p`
  ${font('text', 'md', '600')}
  color: ${color.darkBlue[600]};

  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      writing-mode: vertical-lr;
      transform: rotate(180deg);
    `}
`;

export const List = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 16px;
  ${props =>
    props?.orientation === 'horizontal' &&
    css`
      flex-direction: row;
    `}
  ${props =>
    props?.orientation === 'vertical' &&
    css`
      flex-direction: column;
    `}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  padding: 0px;
  cursor: pointer;

  &:hover {
    border: none;
    background: none;
    use {
      fill: ${color.steel[700]};
    }
  }

  use,
  svg {
    width: 20px;
    height: 20px;
    transition: fill 0.2s ease-in-out;
  }
`;
