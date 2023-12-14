import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export default styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
  a {
    flex-basis: 50%;
    height: auto;
    padding: 16px 24px;
    background: #f7f8fc;
    border: 1px solid #f7f8fc;
    border-radius: 16px;
    transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      border: 1px solid ${color.steel[700]};
      p,
      span,
      svg {
        color: ${color.steel[700]};
        path {
          stroke: ${color.steel[700]};
        }
      }
    }
    &.prev {
      text-align: left;
      span {
        margin-right: auto;
        svg {
          margin-right: 6px;
        }
      }
    }
    &.next {
      text-align: right;
      span {
        margin-left: auto;
        svg {
          margin-left: 6px;
        }
      }
    }
    span {
      width: fit-content;
      display: flex;
      align-items: center;
      padding: 8px;
      ${font('text', 'md', '700')}
      color: ${color.common.black};
      transition: all 250ms ease-in-out;
    }
    p {
      ${font('text', 'md', '700')}
      color: ${color.common.black};
      transition: all 250ms ease-in-out;
    }
    svg path {
      transition: all 250ms ease-in-out;
    }
    .mobile-title {
      display: none;
      @media (max-width: 576px) {
        display: block;
      }
    }
    .desktop-title {
      display: block;
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
`;
