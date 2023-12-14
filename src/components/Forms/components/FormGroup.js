import React from 'react'
import { Form } from "react-bootstrap"

const FormGroup = ({ value, label, error, halfWidth, setValue }) => {
  return (
    <Form.Group name={value} style={halfWidth ? {width: '190px', marginRight: '8px'} : null}>
      <Form.Control
        type="text"
        name={value}
        className={value}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        isValid={value !== ''}
        isInvalid={value === '' && error}
      />
      <Form.Label className="mat-input-label">{label}</Form.Label>
      <Form.Control.Feedback 
        type="invalid" 
        className={value === '' && error ? 'invalid d-block' : 'valid'}
      >
        Please enter a valid {label}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormGroup