import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const defaultStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.grey[300]};
  background-color: ${color.common.white};
  cursor: pointer;
`;

export const checkboxStyles = css`
  border-radius: ${spacing[4]};
`;

export const radioStyles = css`
  border-radius: 100%;
`;

export const checkedStyles = css`
  border: 1px solid ${color.steel[500]};
  background-color: ${color.steel[50]};
`;

export const hoverStyles = css`
  border: 1px solid ${color.steel[500]};
  background-color: ${color.steel[100]};
`;

export const focusStyles = css`
  border: 1px solid ${color.steel[200]};
  box-shadow: 0px 0px 0px 3px ${color.steel[700]};
`;

export const disabledStyles = css`
  border: 1px solid ${color.grey[300]};
  background: ${color.grey[100]};
  pointer-events: none;
  cursor: not-allowed;
`;

export const sizes = {
  sm: css`
    width: ${spacing[16]};
    min-width: ${spacing[16]};
    height: ${spacing[16]};
    min-height: ${spacing[16]};
  `,
  md: css`
    width: ${spacing[20]};
    min-width: ${spacing[20]};
    height: ${spacing[20]};
    min-height: ${spacing[20]};
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ size }) => (size === 'sm' ? spacing[8] : spacing[12])};
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${spacing[2]};

  ${defaultStyles}

  ${({ type }) => type === 'checkbox' && checkboxStyles}
  ${({ type }) => type === 'radio' && radioStyles}
  ${({ size }) => sizes[size]} 
  ${({ checked }) => checked && checkedStyles}

  &:hover, &.hover {
    ${hoverStyles}
    ${({ disabled }) => disabled && disabledStyles}
  }

  &.focus input {
    ${focusStyles}
    ${({ disabled }) => disabled && disabledStyles}
  }

  ${({ disabled }) => disabled && disabledStyles}
`;

export const Input = styled.input`
  ${defaultStyles}

  ${({ type }) => type === 'checkbox' && checkboxStyles}
  ${({ type }) => type === 'radio' && radioStyles}

  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus-visible,
  &.focus {
    ${focusStyles}
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  .heading {
    ${({ size }) => font('text', size, '500')}
    color: ${color.grey[700]};
  }

  .subhead {
    ${({ size }) => font('text', size, '400')}
    color: ${color.grey[600]};
  }
`;

export const Symbol = styled.span`
  ${({ size }) => sizes[size]}
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type, disabled, size }) => {
    const iconSize = size === 'sm' ? spacing[6] : spacing[8];
    if (type === 'radio') {
      return css`
        width: ${iconSize};
        min-width: ${iconSize};
        height: ${iconSize};
        min-height: ${iconSize};
        background-color: ${disabled ? color.grey[300] : color.steel[700]};
        border-radius: 100%;
      `;
    }
  }}
`;
