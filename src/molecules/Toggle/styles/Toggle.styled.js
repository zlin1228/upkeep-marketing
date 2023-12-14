import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

const sizes = {
  sm: {
    slider: {
      width: '36px',
      height: '20px',
    },
    toggle: {
      width: '16px',
      height: '16px',
      translate: 'translateX(16px)',
    },
    heading: font('text', 'sm', '500'),
    subheading: font('text', 'sm', '400'),
  },
  lg: {
    slider: {
      width: '44px',
      height: '24px',
    },
    toggle: {
      width: '20px',
      height: '20px',
      translate: 'translateX(20px)',
    },
    heading: font('text', 'md', '500'),
    subheading: font('text', 'md', '400'),
  },
};

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  width: 100%;
  ${atMinWidth.md`
   flex-direction: row;
 `}
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:focus + div,
  &:focus-visible + div,
  &.focus + div {
    box-shadow: 0px 0px 0px 3px #007cb0;
    background-color: ${color.grey[50]};
  }
`;

export const Container = styled.div`
  width: ${({ size }) => sizes[size].slider.width};
  height: ${({ size }) => sizes[size].slider.height};
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  width: ${({ size }) => sizes[size].slider.width};
  height: ${({ size }) => sizes[size].slider.height};
  border-radius: 34px;
  background-color: ${({ checked }) =>
    checked ? color.steel[500] : color.grey[100]};
  ${({ disabled }) => disabled && `background-color: ${color.grey[100]}`};
  &:hover,
  &.hover {
    background-color: ${({ checked }) =>
      checked ? color.steel[800] : color.grey[200]};
    ${({ disabled }) => disabled && `background-color: ${color.grey[100]}`};
  }
  &:before {
    position: absolute;
    content: '';
    height: ${({ size }) => sizes[size].toggle.height};
    width: ${({ size }) => sizes[size].toggle.width};
    ${shadow('sm', 'dark')}
    left: 2px;
    bottom: 2px;
    background-color: ${color.common.white};
    transition: 0.4s;
    border-radius: 50%;
    ${({ disabled }) => disabled && `background-color: ${color.grey[50]}`};
    transform: ${({ checked, size }) =>
      checked && sizes[size].toggle.translate};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  .heading {
    color: ${color.grey[700]};
    ${({ size }) => sizes[size].heading}}
  }
  .subheading {
    color: ${color.grey[600]};
    ${({ size }) => sizes[size].subheading}}
  }
`;
