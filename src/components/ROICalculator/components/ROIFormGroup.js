import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { FormInput } from '../styles/ROICalculator';

const ROIFormGroup = ({
  question,
  required,
  value,
  input,
  setInput,
  label,
  type,
  prompt,
}) => {
  const { t } = useTranslation();

  return (
    <FormInput>
      <Form.Label className="question">
        {question}
        {required ? (
          <span className="required_asterisk">*</span>
        ) : (
          <span className="optional_field"> {t('(Optional)')}</span>
        )}
      </Form.Label>
      <Form.Group name={value}>
        <Form.Control
          type={type}
          name={value}
          className={value}
          value={`${input}`}
          onChange={e => setInput(`${e.target.value}`)}
          required
        />
        <Form.Label className="mat-input-label">{label}</Form.Label>
        <Form.Control.Feedback type="invalid">
          Please enter a valid {label}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Label className="prompt">{prompt}</Form.Label>
    </FormInput>
  );
};

export default ROIFormGroup;
