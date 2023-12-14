import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Filter = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 24px;
  margin: 0px;
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  color: ${color.darkBlue[900]};
  ${font('text', 'md', '400')}
  text-align: left;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    color: ${color.darkBlue[900]};
    outline: none;
  }
`;
export const IconContainer = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.primary[700]};
  border-radius: 3px;
  transform: translateY(3px);
  svg {
    width: 15px;
    height: 15px;
  }
`;
