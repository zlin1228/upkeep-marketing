import React from 'react';
import FormIcon from './FormIcon';
import { handleClass } from '../utils';
import { Container, Label, Input, Error } from '../styles/FormControl.styled';

const FormControl = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
  validation,
  autoComplete,
}) => (
  <Container>
    <Label htmlFor={name}>{placeholder}</Label>
    <Input
      type={type}
      className={handleClass(value, name, validation)}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={e => handleChange(e)}
      autoComplete={autoComplete}
    />
    <FormIcon status={handleClass(value, name, validation)} />
    {validation[name] && <Error>{validation[name]}</Error>}
  </Container>
);

export default FormControl;
