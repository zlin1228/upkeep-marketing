import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { captureException } from '@sentry/gatsby';
import { isValidEmail } from './Utilities/demoFormValidation';
import PardotFormApi from './Utilities/pardotFormApi';
import { Success, Form } from '../../styles/Components/Form/Subscription';

const Subscription = () => {
  const { t } = useTranslation();

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
      captureException(`Newsletter Subscription Error - ${err}`);
      console.error(err);
    }
  };
  const handleChange = e => {
    setEmail(e.target.value);
    setError(false);
  };

  if (success) {
    return (
      <Success className="success-message">Thank you for subscribing!</Success>
    );
  }

  return (
    <Form className="subscription-form">
      <input
        aria-label="email"
        type="email"
        placeholder={t('Email Address')}
        value={email}
        onChange={handleChange}
      />
      {error && (
        <span className="error-message">
          Please enter a valid email address
        </span>
      )}
      <button type="submit" onClick={handleSubmit}>
        {t('Subscribe Now')}
      </button>
    </Form>
  );
};

export default Subscription;
