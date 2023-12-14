import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[100]};
  border-radius: 8px;
`;
export const Rating = styled.div`
  width: fit-content;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.sm`
      ${font('text', 'lg', '400')}
    `}
  }
  .author {
    display: flex;
    align-items: center;
    gap: 4px;
    .name {
      ${font('text', 'sm', '700')}
      color: ${color.darkBlue[900]};
    }
    .role {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[900]};
    }
  }
`;
export const Linebreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.mediumGrey[50]};
`;
export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${atMinWidth.lg`
    flex-direction: row;
    justify-content: space-between;
    gap: 105px;
  `}
  a {
    white-space: nowrap;
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .heading {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[900]};
  }
  .subhead {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
    ul,
    ol {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0px;
      margin: 0px;
      list-style: none;
      li {
        position: relative;
        ${font('text', 'sm', '400')}
        color: ${color.darkBlue[600]};
        padding-left: 19px;
        &:after {
          content: '';
          position: absolute;
          top: 5.5px;
          left: 0px;
          width: 11px;
          height: 11px;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(0, 180, 81)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
          background-size: 11px;
          background-repeat: no-repeat;
        }
    }
  }
`;
