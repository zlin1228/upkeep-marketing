import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .heading {
    display: flex;
    align-items: center;
    gap: 8px;
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
  .clear-btn {
    ${font('text', 'md', '600')}
    color: ${color.darkBlue[900]};
    border: none;
    background: ${color.common.transparent};
    outline: none;
    padding: 0px;
    &:focus,
    &:hover {
      color: ${color.darkBlue[900]};
      border: none;
      background: ${color.common.transparent};
      outline: none;
    }
  }
`;
