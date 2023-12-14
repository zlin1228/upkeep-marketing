import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';

const iconColorMap = {
  blue: color.steel[400],
  yellow: color.yellow[800],
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  background-color: ${color.common.white};
  border-radius: 16px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  padding: ${spacing[32]} ${spacing[16]};
  z-index: 2;

  ${atMinWidth.lg`
    gap: ${spacing[48]};
    padding: ${spacing[48]};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${({ withItems }) =>
    withItems &&
    css`
      ${atMinWidth.xl`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      `}
    `}

  ${({ hideText }) =>
    hideText &&
    css`
      ${atMinWidth.xl`
        display: block;
      `}
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: ${({ theme }) => iconColorMap[theme]};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    p {
      margin-bottom: 16px;
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      ${({ withItems }) =>
        !withItems &&
        css`
          ${atMinWidth.lg`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        `}
        `}
      gap: ${spacing[16]};
      padding: 0px;
      margin: 0px;
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        padding: 0px;
        ul > li {
          font-size: 0.8rem;
          position: relative;
          list-style: circle;
        }
      }
    }
    & > ul > li {
      padding-left: ${spacing[36]};
      position: relative;
      line-height: 24px;
      svg {
        stroke: #007bff;
      }
      &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        left: 0;
        top: 4px;
        background-color: ${({ theme }) => iconColorMap[theme]};
      }
      &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        left: -1.5px;
        top: 4px;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(7, 22, 33)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
        background-position: 6px center;
        background-size: 10px;
        background-repeat: no-repeat;
      }
      ul {
        padding: 0;
      }
    }
  }
`;
