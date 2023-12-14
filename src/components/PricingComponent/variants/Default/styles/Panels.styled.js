import styled, { css } from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { spacing } from '../../../../../atoms/spacing';

const colorBarMap = {
  'red-500': color.primary[500],
  'green-500': color.green[500],
  'yellow-700': color.yellow[700],
  'steel-700': color.steel[700],
};

export const Container = styled.div`
  display: flex;
  .spacer {
    flex: ${({ spacerFlex }) => spacerFlex};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: ${({ wrapperFlex }) => wrapperFlex};
  display: grid;
  grid-template-columns: repeat(${props => props?.numOfItems || 3}, 1fr);
  background-color: ${color.common.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  transition: all 250ms ease-in-out;

  &.scrolled {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${spacing[0]};
  background-color: ${color.common.white};
  border-right: none;
  border-right: 1px solid ${color.mediumGrey[50]};
  transition: all 250ms ease-in-out;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[12]};
  padding: ${spacing[16]};
`;

export const ColorBar = styled.div`
  width: 100%;
  height: ${spacing[8]};
  background-color: ${({ theme }) => colorBarMap[theme]};
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  .heading {
    ${font('text', 'xl', '700')}
    color: ${color.darkBlue[1000]};
  }

  .price {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: ${spacing[4]};
    margin: 0 auto;
    ${font('text', 'xl', '700')}
    color: ${color.darkBlue[1000]};

    .amount {
      ${font('text', 'xl', '700')}
      color: ${color.darkBlue[1000]};
    }

    .duration {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;
