import React from 'react';
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
  label,
  placeholder,
  autoComplete,
  required,
  errorMessage,
  value,
  handleChange,
  hidden,
}) => (
  <Container className={`custom-form-control control-${name}`} hidden={hidden}>
    <Wrapper className="custom-form-control-wrapper">
      <Label htmlFor={name} className="custom-form-control-label">
        {label}
        {required && <Astericks>*</Astericks>}
      </Label>
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
