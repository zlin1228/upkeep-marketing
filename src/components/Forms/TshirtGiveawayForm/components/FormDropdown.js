import React from 'react';
import { getCountryCode } from '../utils/helpers';
import ErrorSvg from '../../assets/error.svg';
import {
  Container,
  Wrapper,
  Label,
  Astericks,
  Select,
  ErrorIcon,
  ErrorMessage,
} from '../styles/FormDropdown.styled';

const FormDropdown = ({
  id,
  type,
  name,
  placeholder,
  autoComplete,
  required,
  errorMessage,
  data,
  setData,
  value,
  handleChange,
  hidden,
  options,
}) => (
  <Container className={`custom-form-control control-${name}`} hidden={hidden}>
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>
      {required && <Astericks>*</Astericks>}
      <Select
        id={id}
        name={name}
        autoComplete={autoComplete}
        value={value}
        className={errorMessage ? 'error' : ''}
        onChange={e => handleChange(e)}
        onFocus={() => type === 'tel' && getCountryCode(data, setData)}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </Select>
      {errorMessage && <ErrorIcon src={ErrorSvg} alt="Error Icon" />}
    </Wrapper>
    {errorMessage && (
      <ErrorMessage dangerouslySetInnerHTML={{ __html: errorMessage }} />
    )}
  </Container>
);

export default FormDropdown;
