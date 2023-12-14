import React from 'react';
import { getCountryCode } from '../utils/helpers';
import ErrorSvg from '../../assets/error.svg';
import {
  Container,
  Wrapper,
  Label,
  Astericks,
  Input,
  ErrorIcon,
  ErrorMessage,
} from '../styles/FormControl.styled';

const FormControl = ({
  id,
  type,
  name,
  placeholder,
  autoComplete,
  required,
  errorMessage,
  value,
  handleChange,
  hidden,
}) => (
  <Container className={`custom-form-control control-${name}`} hidden={hidden}>
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>
      {required && <Astericks>*</Astericks>}
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        className={errorMessage ? 'error' : ''}
        onChange={e => handleChange(e)}
      />
      {errorMessage && <ErrorIcon src={ErrorSvg} alt="Error Icon" />}
    </Wrapper>
    {errorMessage && (
      <ErrorMessage dangerouslySetInnerHTML={{ __html: errorMessage }} />
    )}
  </Container>
);

export default FormControl;
