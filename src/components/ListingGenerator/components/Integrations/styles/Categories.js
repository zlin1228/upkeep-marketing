import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';

const activeCategory = {
  true: `
  background: #e6f2ff;
  font-weight: bold;
  color: #004a99;
  `,
  false: `
  font-weight: normal;
  color: #000000;
  `,
};
export const Container = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 24px;
  }
`;
export const Category = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: auto;
  background: transparent;
  ${props => activeCategory[props.active]}
  margin: 0px 0px;
  border: none;
  outline: none;

  font-style: normal;
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  border-radius: 8px;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background: #e6f2ff;
    color: #004a99;
  }
  .category {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-basis: 75%;
    ${font('text', 'md', '600')}
  }
  .check {
    flex-basis: 25%;
  }
`;
