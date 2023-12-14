import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';

export const CustomForm = styled(Form)`
  width: 100%;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 8px;
`;
export const FormGroup = styled(Form.Group)`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-bottom: 0px;
  @media (max-width: 499px) {
    flex-direction: column;
    gap: 0px;
  }
`;
export const FormControl = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  @media (max-width: 499px) {
    margin-bottom: 8px;
  }

  /* React Tel Styles */
  .react-tel-input .special-label {
    display: none !important;
  }

  .react-tel-input input {
    width: inherit;
    min-height: 46px;
    background: #ffffff;
    border: 1px solid #e0e6ed;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    border-radius: 4px;
    &:hover,
    &:focus {
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
      border: 1px solid #e0e6ed;
    }
    &::placeholder,
    &[type='text'],
    &[type='email'] {
      font-size: 15px;
      line-height: 15px;
    }
    &::placeholder {
      color: #707481;
    }
  }
`;
export const FormLabel = styled(Form.Label)`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #0b1a2b;
  margin: 8px 0px;
`;
export const FormInput = styled(Form.Control)`
  background: #ffffff !important;
  border: 1px solid #e0e6ed !important;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 4px;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
  }
  &::placeholder,
  &[type='text'],
  &[type='email'] {
    font-size: 15px;
    line-height: 15px;
  }
  &::placeholder {
    color: #707481;
  }
`;
export const FormSelect = styled(Form.Control)`
  width: 100%;
  position: relative;
  appearance: initial;
  background: #ffffff !important;
  border: 1px solid #e0e6ed !important;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 4px;
  color: #707481;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05) !important;
  }
  &::placeholder,
  &[type='select'] {
    font-size: 15px;
    line-height: 15px;
    padding-left: 12px;
  }
`;
export const SelectIcon = styled(TiArrowSortedDown)`
  color: #707481;
  position: absolute;
  top: 52px;
  right: 6px;
  z-index: 100;
  pointer-events: none;
`;
export const FormPolicy = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: baseline;
`;
export const FormCheck = styled(Form.Check)`
  appearance: auto;
  width: 18px;
  height: 18px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(22, 29, 37, 0.02);
  border-radius: 4px;
  & input {
    border: 1px solid #a9acb1 !important;
    appearance: auto;
    -webkit-appearance: auto;
  }
`;
export const PrivacyLabel = styled.label`
  font-size: 14px;
  line-height: 21px;
  color: #707481;
  a {
    text-decoration: underline;
  }
`;
export const FormPolicyValidation = styled.div`
  margin-bottom: 8px;
`;
export const ErrorMessage = styled(Form.Text)`
  color: #dc3545;
`;
export const FormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 12px;
  width: 100%;
  height: auto;
  background: #007bff;
  border-radius: 4px;
  outline: none;
  border: none;
`;
export const Success = styled.div`
  text-align: center;
  p {
    color: #0b1a2b;
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 12px;
    width: 100%;
    height: auto;
    background: #007bff;
    border-radius: 4px;
    margin-top: 24px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
`;
