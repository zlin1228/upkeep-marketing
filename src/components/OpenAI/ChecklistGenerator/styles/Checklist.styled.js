import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing[24]};
  gap: ${spacing[12]};
  background-color: ${color.common.white};
  border: 1px solid ${color.darkBlue[100]};
  border-radius: ${spacing[16]};

  .title {
    ${font('display', 'md', '700')};
    color: ${color.darkBlue[1000]};
  }

  .description {
    ${font('text', 'lg', '400')};
    color: ${color.darkBlue[600]};
  }

  .list {
    display: flex;
    flex-direction: column;
    /* gap: ${spacing[8]}; */
    padding: ${spacing[0]};
    margin: ${spacing[0]};

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* gap: ${spacing[8]}; */
      &,
      span {
        ${font('text', 'lg', '400')};
        color: ${color.darkBlue[600]};
      }
      span {
        width: 100%;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[12]};
  ${font('display', 'tiny-xs', '700')};
  color: ${color.darkBlue[1000]};
`;

export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${spacing[12]};
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  padding: ${spacing[0]};
  ${font('display', 'tiny-xs', '700')};
  color: ${color.darkBlue[1000]};

  &:hover {
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    color: ${color.darkBlue[1000]};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const DeleteButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[12]};
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  padding: ${spacing[0]};
  ${font('display', 'tiny-xs', '700')};
  color: ${color.darkBlue[1000]};

  &:hover {
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    color: ${color.darkBlue[1000]};
  }

  svg {
    width: 22.5px;
    height: 22.5px;
  }
`;
