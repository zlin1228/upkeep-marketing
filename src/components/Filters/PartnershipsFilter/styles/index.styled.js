import styled from 'styled-components';

import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: ${color.common.white};
  padding: 24px;
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
`;
export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    height: 100%;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 8px 0px;
  border: none;
  outline: none;
  background: ${color.common.transparent};
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
  img {
    width: 15px;
    height: 15px;
    object-fit: contain;
  }
  &:hover,
  &:focus {
    border: none;
    outline: none;
    background: ${color.common.transparent};
    span {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;
