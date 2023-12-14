import React, { useState } from 'react';
import { captureException } from '@sentry/gatsby';
import { Form } from 'react-bootstrap';
import {
  Container,
  Label,
  InputEmail,
  Success,
  ButtonStyles,
  FormStyles,
} from '../../styles/Components/Form/NewsletterBar';
import { isValidEmail } from './Utilities/demoFormValidation';
import PardotFormApi from './Utilities/pardotFormApi';

const NewsletterBar = ({ theme, heading, subhead }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (isValidEmail(email)) {
        PardotFormApi.newsletterSignUp(email).then(() => setSuccess(true));
      } else {
        setError(true);
      }
    } catch (err) {
      captureException(`Newsletter Bar Error - ${err}`);
      alert('Something went wrong.');
      console.error(err);
    }
  };

  return (
    <Container background={theme}>
      <Label>
        <h3 className="heading">
          {heading || 'Subscribe to the UpKeep Trends Newsletter'}
        </h3>
        <p className="subhead">
          {subhead ||
            'This newsletter keeps you up-to-date on topics in maintenance and reliability!'}
        </p>
      </Label>
      {success ? (
        <Success>Thank you for subscribing!</Success>
      ) : (
        <FormStyles validated={false} noValidate>
          <Form.Group>
            <InputEmail
              type="text"
              name="email"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
              isValid={email !== '' && true}
              isInvalid={email === '' && error}
            />
            <Form.Label className="mat-input-label">
              Enter work email
            </Form.Label>
          </Form.Group>
          <ButtonStyles
            as="button"
            onClick={e => handleSubmit(e)}
            background={theme}
          >
            Subscribe Now
          </ButtonStyles>
          <Form.Control.Feedback
            type="invalid"
            className={email === '' && error ? 'invalid d-block' : 'valid'}
          >
            Please enter a valid email address
          </Form.Control.Feedback>
        </FormStyles>
      )}
    </Container>
  );
};

export default NewsletterBar;
