import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${color.darkBlue[50]};
  padding-bottom: ${spacing[16]};

  .error-msg {
    width: 100%;
    ${font('text', 'xs', '600')}
    color: ${color.primary[700]};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  align-items: center;

  ${atMinWidth.sm`
    flex-direction: row;
    gap: ${spacing[0]};
  `}

  .search-icon {
    display: block;
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
  }
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${color.darkBlue[50]};
  ${atMinWidth.sm`
    border-bottom: none;
  `}
`;

export const Label = styled.label`
  visibility: hidden;
`;

export const Input = styled.input`
  &&& {
    width: 100%;
    border: none;
    outline: none;
    background-color: ${color.common.white};
    padding: ${spacing[6]} ${spacing[0]};
  }

  &,
  &::placeholder {
    ${font('text', 'xl', 400)}
    color: ${color.darkBlue[600]};
  }
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing[8]};
  padding: ${spacing[8]} ${spacing[14]};
  background-color: ${color.darkBlue[1000]};
  border: 1px solid ${color.darkBlue[1000]};
  border-radius: ${spacing[72]};
  ${font('display', 'tiny-xs', '700')}
  color: ${color.common.white};
  transition: all 250ms ease-in-out;

  ${atMinWidth.sm`
    width: fit-content;
  `}

  &:hover,
  &.hovered {
    color: ${color.common.white};
    background: ${color.darkBlue[700]};
    border: 1px solid ${color.darkBlue[700]};
  }

  &:focus,
  &.focused {
    color: ${color.common.white};
    background: ${color.darkBlue[1000]};
    border: 1px solid ${color.darkBlue[1000]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
  }
`;
