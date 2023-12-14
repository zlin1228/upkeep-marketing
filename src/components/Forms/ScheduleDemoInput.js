import React from 'react';
import { Form } from 'react-bootstrap';
import {
  CustomForm,
  InputEmail,
  Button,
} from '../../styles/Components/Form/EmailOnlySchedule';
import MultiPartModal from './MultiPartForm/MultiPartModal';

const ScheduleDemoInput = ({
  id,
  label,
  emailRef,
  errorRef,
  handleChange,
  handleSubmit,
}) => (
  <>
    <MultiPartModal id="demoB" />
    <MultiPartModal id="demoC" />
    <CustomForm validated={false} noValidate id={id || ''}>
      <Form.Row className="flex-nowrap w-100">
        <Form.Group>
          <InputEmail
            type="text"
            name="email"
            required
            onChange={handleChange}
            ref={emailRef}
          />
          <Form.Label className="mat-input-label">Enter work email</Form.Label>
        </Form.Group>
        <Button onClick={handleSubmit} type="button">
          {label}
        </Button>
      </Form.Row>
      <Form.Control.Feedback type="invalid" ref={errorRef}>
        Please enter a valid email address
      </Form.Control.Feedback>
    </CustomForm>
  </>
);

export default ScheduleDemoInput;
