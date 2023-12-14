import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  padding: ${spacing[32]} ${spacing[24]};
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[100]};
  border-radius: ${spacing[16]};
`;

export const Header = styled.p`
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[1000]};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;

  li:last-child {
    border-bottom: none;
    padding-bottom: ${spacing[0]};
  }
`;

export const ListItem = styled.li`
  width: 100%;
  padding-bottom: ${spacing[16]};
  border-bottom: 1px solid ${color.darkBlue[25]};
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[16]};
  padding: ${spacing[0]};
  background-color: ${color.common.transparent};
  outline: none;
  border: none;

  &:hover {
    background-color: ${color.common.transparent};
    outline: none;
    border: none;
    svg {
      opacity: 1;
    }
  }

  svg {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[8]};
`;

export const Option = styled.p`
  padding: ${spacing[2]} ${spacing[10]};
  ${font('text', 'sm', '500')}
  color: ${color.grey[700]};
  background: ${color.grey[100]};
  mix-blend-mode: multiply;
  border-radius: ${spacing[16]};
`;
