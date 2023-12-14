import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: 1px solid ${color.darkBlue[25]};
  border-bottom: 1px solid ${color.darkBlue[25]};
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.common.transparent};
  color: ${color.darkBlue[900]};
  outline: none;
  border: none;
  ${font('display', 'xs', '700')}
  text-align: left;
  padding: 16px 0px;
  &:hover,
  &:focus {
    background: ${color.common.transparent};
    color: ${color.darkBlue[900]};
    outline: none;
    border: none;

    ${font('display', 'xs', '700')}
  }
  svg {
    width: 12px;
    height: 12px;
    ${props => props?.expanded && 'transform: rotate(180deg);'}
  }
`;
export const Filters = styled.div`
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 450ms ease-in-out;
  ${props => props?.expanded && 'max-height: 1000px;'}
`;
