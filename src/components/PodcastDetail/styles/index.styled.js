import styled from 'styled-components';
import { richTextStyles } from '../../../atoms/typography';

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 48px 0px;
`;
export const Toggles = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 48px;
  .content-toggle {
    width: auto;
    height: auto;
    background: none;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #697891;
    padding: 16px 0px;
    margin-right: 48px;
    border-bottom: 3px solid #ffffff;
    transition: all 250ms ease-in-out;
    @media (max-width: 499px) {
      margin-right: 24px;
    }
    &:focus,
    &:hover {
      outline: none;
      color: #697891;
    }
    &.active {
      color: #0d141a;
      border-bottom: 3px solid #007bff;
    }
  }
`;
export const Post = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${richTextStyles}
`;
