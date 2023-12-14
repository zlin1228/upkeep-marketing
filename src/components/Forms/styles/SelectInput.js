import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { TiArrowSortedDown } from 'react-icons/ti';

export const FormSelect = styled(Form.Control)`
  width: 100%;
  height: 100%;
  max-height: 56px;
  min-height: 56px;
  appearance: initial;
  background: #ffffff !important;
  border: 1px solid #e0e6ed !important;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  color: #707481;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
  }
  &::selection {
    border: 1px solid blue;
  }
  &::placeholder,
  &[type='select'] {
    font-size: 15px;
    line-height: 15px;
    padding-left: 12px;
  }
`;
export const SelectLabel = styled.label`
  -webkit-transform: translate(0, -28px) scale(0.75);
  -ms-transform: translate(0, -28px) scale(0.75);
  transform: translate(0, -28px) scale(0.75);
  background: #fff;
  padding: 2px 10px;
  border: 1px solid #eaeaec;
  z-index: 20;
`;
export const SelectIcon = styled(TiArrowSortedDown)`
  color: #707481;
  position: absolute;
  top: 18px;
  right: 15px;
  z-index: 100;
  pointer-events: none;
`;
