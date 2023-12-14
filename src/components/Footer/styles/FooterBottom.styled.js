import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[64]} ${spacing[16]} ${spacing[0]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    max-width: ${containers.md};
    padding: ${spacing[64]} ${spacing[32]} ${spacing[0]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
    padding: ${spacing[96]} ${spacing[32]} ${spacing[0]};
  `}
  .bottom-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${spacing[24]};
    border-top: 1px solid ${color.darkBlue[800]};
    padding: ${spacing[24]} ${spacing[0]} ${spacing[0]};
    ${atMinWidth.md`
      flex-direction: row;
      align-items: center;
    `}
    p {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[100]};
    }
    button#ot-sdk-btn {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[100]};
      border: none;
      background: transparent;
      padding: 0px;
      margin: 0px;
      opacity: 1;
      transition: all 300ms ease-in-out;
      &:hover {
        opacity: 0.3;
      }
      &:active,
      &:focus {
        outline: none;
      }
    }
    a {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[100]};
      margin: 0px;
      opacity: 1;
      transition: all 300ms ease-in-out;
      &:hover {
        opacity: 0.3;
      }
    }
    span {
      display: none;
      ${atMinWidth.xs`
        display: block;
        height: 20px;
        ${font('text', 'sm', '400')}
        color: ${color.darkBlue[800]};
        margin: 0px 24px;
        transform: translateY(0px);
      `}
    }
    .bottom-left {
      display: flex;
      align-items: center;
      margin-bottom: ${spacing[16]};
      ${atMinWidth.sm`
        margin-bottom: ${spacing[0]};
      `}
      img {
        margin-right: ${spacing[16]};
      }
    }
    .bottom-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      a,
      button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ${atMinWidth.sm`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      `}
    }
  }
`;
