import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 430px;
  height: 100%;
  padding-top: 18%;
  padding-bottom: 10%;
  z-index: 100;
  ${atMinWidth.xl`
    display: block;
  `}
  @media (max-width: 1441px) {
    padding-top: 22%;
    padding-bottom: 15%;
  }
`;
export const Control = styled.div`
  position: sticky;
  top: 47.5%;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 5%;
  @media (min-width: 1500px) {
    top: 37.5%;
  }
`;
export const Icon = styled.div`
  overflow: hidden;
  img {
    width: 182px;
    height: 100%;
    object-fit: contain;
    transform: translateX(50%);
  }
`;
export const List = styled.ul`
  width: 100%;
  max-width: 212px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  transform: translateX(50%);
`;

export const ListItem = styled.li`
  width: 100%;
  &&& > a {
    cursor: pointer;
    ${font('text', 'md', '400')}
    color: ${color.mediumGrey[300]};
    transition: all 0.3s ease-in-out;
    &.active {
      ${font('text', 'md', '700')}
      color: ${color.common.black};
    }
    &:hover,
    &:focus {
      ${font('text', 'md', '700')}
      color: ${color.mediumGrey[600]};
    }
  }
`;
