import React from 'react';
import { Form } from 'react-bootstrap';
import { FormSelect, SelectLabel, SelectIcon } from '../styles/SelectInput';

export default ({
  value,
  handler,
  setter,
  formData,
  placeholder,
  options,
  feedback,
  label,
  name,
}) => (
  <Form.Group name={name} className="w-100">
    <SelectIcon size="1.25rem" />
    <FormSelect
      type="select"
      as="select"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => handler(e, setter, formData)}
    >
      {options.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </FormSelect>
    <SelectLabel className="mat-input-label">{label}</SelectLabel>
    <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
  </Form.Group>
);
