import styled, { css } from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  border-radius: 8px;
  padding-bottom: 0px;
  transition: padding-bottom 450ms ease-in-out;
  ${props =>
    props.expanded &&
    css`
      padding-bottom: 16px;
    `}
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin: 0px;
  background-color: ${color.common.transparent};
  border: none;
  color: ${color.darkBlue[900]};
  ${font('display', 'xs', '700')}
  &:hover, &:focus {
    background-color: ${color.common.transparent};
    color: ${color.darkBlue[900]};
    outline: none;
  }
  svg {
    width: 12px;
    height: 12px;
  }
  ${props =>
    props.expanded &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;
export const Filters = styled.div`
  width: 100%;
  max-height: 0px;
  transition: max-height 450ms ease-in-out;
  overflow: hidden;
  ${props =>
    props?.expanded &&
    css`
      max-height: 800px;
    `}
`;
