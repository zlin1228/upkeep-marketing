import styled from 'styled-components';
import { Link } from 'gatsby';

const tagColorMappings = {
  blue:
    'background: rgba(0, 123, 255, 0.05); color: #004A99; &:hover { color: #004A99; opacity: .75; }',
  purple:
    'background: rgba(73, 69, 251, 0.05); color: #3039B0; &:hover { color: #3039B0; opacity: .75; }',
  green:
    'background: rgba(55, 192, 107, 0.05); color: #1C6036; &:hover { color: #1C6036; opacity: .75; }',
  red:
    'background: rgba(246, 149, 206, 0.05); color: #661510; &:hover { color: #661510; opacity: .75; }',
  yellow:
    'background: rgba(245, 201, 83, 0.05); color: #776328; &:hover { color: #776328; opacity: .75; }',
};
export const Tags = styled.div`
  grid-area: tags;
  width: 100%;
  height: auto;
  padding: 0px 0px 14.5px;
  margin: 0px 0px 14.5px;
  display: flex;
  overflow: scroll;
  cursor: ew-resize;
`;
export const Tag = styled(Link)`
  width: fit-content;
  height: auto;
  white-space: nowrap;
  padding: 8px 16px;
  margin: 0px 24px 0px 0px;

  font-style: normal;
  font-weight: 600;
  font-size: 13.5px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
  opacity: 1;
  ${props => tagColorMappings[props?.color]}
  @media (max-width: 776px) {
    font-size: 10px;
    margin: 0px 12px 0px 0px;
  }
`;
