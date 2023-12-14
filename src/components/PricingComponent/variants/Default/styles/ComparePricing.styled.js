import styled, { css } from 'styled-components';

import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { atMinWidth } from '../../../../../atoms/breakpoints';

const selectBorderColorMap = {
  'red-500': color.primary[500],
  'green-500': color.green[500],
  'yellow-700': color.yellow[700],
  'steel-700': color.steel[700],
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[14]};
  margin: 0 auto;

  ${atMinWidth.md`
    gap: ${spacing[16]};
  `}

  &.scrolled {
    background-color: ${color.common.white};
    padding: ${spacing[16]};
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  }
`;

export const SelectorsWrapper = styled.div`
  width: 100%;
  display: grid;

  ${({ length }) =>
    css`
      grid-template-columns: repeat(${length || 2}, 1fr);
    `}

  gap: ${spacing[14]};

  ${atMinWidth.md`
    ${({ length }) =>
      css`
        grid-template-columns: repeat(${length || 3}, 1fr);
      `}
    gap: ${spacing[16]};
  `}
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  ${({ length }) =>
    css`
      grid-template-columns: repeat(${length || 2}, 1fr);
    `}
  gap: ${spacing[20]};

  ${atMinWidth.md`
    ${({ length }) =>
      css`
        grid-template-columns: repeat(${length || 3}, 1fr);
      `}
    gap: ${spacing[16]};
  `}

  &.scrolled {
    gap: ${spacing[0]};
  }

  .pricing-card:last-child {
    border-right: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${spacing[16]};
  background-color: ${color.common.white};
  border-radius: ${spacing[16]};
  overflow: hidden;

  &.scrolled {
    border-radius: ${spacing[0]};
    padding: ${spacing[0]} ${spacing[12]};

    .colorbar {
      display: none;
    }

    .heading {
      display: none;
    }

    .subhead .per-user {
      ${font('text', 'xs', '400')}
    }

    .price {
      ${font('display', 'tiny', '700')}
      color: ${color.common.black};
    }
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[12]};
  padding: ${spacing[16]} ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[16]};
  `}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  .heading {
    ${font('text', 'xl', '700')}
    color: ${color.darkBlue[1000]};
    text-align: center;
  }

  .price {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: ${spacing[4]};
    margin: 0 auto;
    text-align: center;

    .amount {
      ${font('text', 'xl', '700')}
      color:  color: ${color.darkBlue[1000]};
    }

    .duration {
      ${font('text', 'xs', '400')}
      color:  color: ${color.darkBlue[600]};
    }
  }
`;

export const SelectStyles = (scrolled, theme) => ({
  control: baseStyles => ({
    ...baseStyles,
    borderColor: scrolled ? selectBorderColorMap[theme] : color.darkGrey[300],
    borderWidth: scrolled ? '3px' : '1px',
    borderRadius: '8px',
    padding: '8px 12px',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    cursor: 'pointer',
    '&:hover': {
      borderColor: scrolled ? selectBorderColorMap[theme] : color.darkGrey[300],
    },
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '0px',
  }),
  dropdownIndicator: () => ({
    padding: '0px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    margin: '0px',
    padding: '0px',
    overflow: 'hidden',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    borderRadius: '8px',
    marginTop: '4px',
    overflow: 'hidden',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? color.grey[100] : 'white',
    color: state.isFocused ? color.grey[900] : color.grey[700],
    cursor: 'pointer',
    padding: '8px 12px',
    '&:hover': {
      backgroundColor: color.grey[100],
      color: color.grey[900],
    },
  }),
});
