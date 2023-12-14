import styled from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  padding: ${({ scrolled }) =>
    scrolled ? `${spacing[0]} ${spacing[16]}` : `${spacing[0]}`};

  ${atMinWidth.sm`
    padding: ${spacing[0]};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-height: ${({ tableExpanded }) => (tableExpanded ? '100%' : '675px')};
  background-color: ${color.common.white};
  border-radius: ${spacing[16]};
  overflow: hidden;
  transform: translateZ(0);
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

export const TContainer = styled.div`
  width: 100%;
`;

export const THeading = styled.div`
  width: 100%;
  padding: ${spacing[14]} ${spacing[24]};
  ${font('display', 'tiny', '700')}
  color: ${color.darkBlue[1000]};
`;

export const TRow = styled.div`
  width: 100%;
  padding: ${spacing[16]} ${spacing[24]};

  .name {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }
`;

export const TBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${TRow}:first-child {
    border-bottom: 1px solid ${color.darkBlue[50]};
  }
`;

export const TGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ gridColumns }) =>
    `repeat(${gridColumns || 3}, 1fr)`};

  .name {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }
`;

export const TColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ index }) =>
    index % 2 === 0 ? color.midnight[25] : color.common.white};

  ${TRow}:first-child {
    border-bottom: 0.5px solid ${color.darkBlue[50]};
  }

  ${atMinWidth.xl`
    padding: ${spacing[0]};
    background-color: ${({ index }) =>
      index % 2 === 0 ? color.common.white : color.midnight[25]};
  `}
`;

export const TCell = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${spacing[14]} ${spacing[24]};

  ${({ mostPopular, index }) => {
    if (index % 2 === 0 && mostPopular) {
      return `
        background: linear-gradient(0deg, rgba(0, 124, 176, 0.03), rgba(0, 124, 176, 0.03)), #FFFFFF;
      `;
    }

    if (index % 2 !== 0 && mostPopular) {
      return `background: linear-gradient(0deg, rgba(0, 124, 176, 0.1), rgba(0, 124, 176, 0.1)), #F7FAFF;`;
    }
  }}

  ${atMinWidth.xl`
    border: 0.5px solid ${color.darkBlue[50]};
    padding: 15.5px ${spacing[24]};
  `}

  .name {
    ${font('text', 'sm', '700')}
    text-align: left;
    color: ${color.darkBlue[1000]};
  }

  .label {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Dash = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
`;
