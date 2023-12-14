import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ name, value, handler, required, label, feedback }) => (
  <Form.Group name={name} className="w-100">
    <Form.Control
      type={name === 'password' ? 'password' : 'text'}
      name={name}
      value={value}
      required={required}
      onChange={e => handler(e)}
    />
    <Form.Label className="mat-input-label">{label}</Form.Label>
    <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
  </Form.Group>
);

export default TextInput;
