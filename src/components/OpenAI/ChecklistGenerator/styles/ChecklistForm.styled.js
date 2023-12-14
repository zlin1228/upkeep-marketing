import styled, { css } from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[16]};
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[1000]};

  ${atMinWidth.sm`
    ${font('display', 'sm', '700')}
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};

  .error-msg {
    ${font('text', 'xs', '600')}
    color: ${color.primary[1000]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}

  ${atMinWidth.xl`
    display: flex;
    flex-direction: column;
  `}
`;

export const FormControl = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  label {
    ${font('text', 'sm', '500')}
    color: ${color.darkBlue[600]};
    span {
      color: ${color.primary[700]};
    }
  }

  svg {
    position: absolute;
    top: 58%;
    right: 14px;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ControlStyles = css`
  width: 100%;
  height: 44px;
  padding: ${spacing[10]} ${spacing[12]};
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[100]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: ${spacing[8]};
  &::placeholder {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Select = styled.select`
  ${ControlStyles}
  cursor: pointer;
`;
export const Input = styled.input`
  ${ControlStyles}
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[8]};
  background-color: ${color.darkBlue[1000]};
  border: 1px solid ${color.darkBlue[1000]};
  border-radius: 72px;
  outline: none;
  padding: ${spacing[10]} ${spacing[0]};
  ${font('display', 'tiny-xs', '700')}
  color: ${color.common.white};
  transition: background-color 250ms ease-in-out, border 250ms ease-in-out;

  &:hover {
    background-color: ${color.darkBlue[700]};
    border: 1px solid ${color.darkBlue[700]};
  }
`;
