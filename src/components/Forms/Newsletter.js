import React, { useState } from 'react';
import { captureException } from '@sentry/gatsby';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { isValidEmail } from './Utilities/demoFormValidation';
import PardotFormApi from './Utilities/pardotFormApi';
import Button from '../Button/Button';
import {
  Flex,
  InputEmail,
} from '../../styles/Components/Form/EmailOnlySchedule';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    try {
      const validEmail = isValidEmail(email);
      if (!email || !validEmail) {
        setError(true);
        return false;
      }
      PardotFormApi.newsletterSignUp(email).then(() => {
        setSuccess(true);
        setError(false);
        setEmail('');
      });
    } catch (err) {
      captureException(`Newsletter Form Error - ${err}`);
      alert('Something went wrong.');
      console.error(err);
    }
  };
  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <NewsletterContainer>
      <NewletterHeader>
        <h1>Ready to discover the power of maintenance management?</h1>
        <p>
          Join the UpKeep Newsletter to get connected and stay in the know of
          all of the hottest trends.
        </p>
      </NewletterHeader>
      {success && <Success>Thank you for subscribing!</Success>}
      <Form validated={false} noValidate>
        <Flex className="justify-content-center">
          <Form.Group className="w-100">
            <InputEmail
              type="text"
              name="email"
              required
              onChange={handleChange}
              value={email}
              isInvalid={error}
              style={{ maxWidth: '100%' }}
            />
            <Form.Label className="mat-input-label">Email Address</Form.Label>
          </Form.Group>
          <Button
            onClick={handleSubmit}
            as="button"
            value="Subscribe Now"
            className="ml-0"
          />
        </Flex>
        <Form.Control.Feedback
          type={success ? 'valid' : 'invalid'}
          className={error ? 'is-invalid' : ''}
        >
          Please enter a valid email address
        </Form.Control.Feedback>
      </Form>
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  width: 543px;
  margin: 0 auto;
  border-top: 4px solid #007bff;
  padding: 40px;
  box-shadow: rgb(10 16 34 / 10%) 0px 2px 2px;
  border-left: 1px solid rgb(224, 230, 237);
  border-right: 1px solid rgb(224, 230, 237);
  border-bottom: 1px solid rgb(224, 230, 237);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const NewletterHeader = styled.div`
  h1 {
    font-size: 31.1px;
    line-height: 36px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 1rem;
  }
`;
const Success = styled.p`
  color: #47b972;
`;
