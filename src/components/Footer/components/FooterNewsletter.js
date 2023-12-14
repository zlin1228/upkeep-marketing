import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import isEmail from 'validator/lib/isEmail';
import PardotFormApi from '../../Forms/Utilities/pardotFormApi';
import { Container, Form } from '../styles/FooterNewsletter.styled';

const FooterNewsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmail(email)) {
      PardotFormApi.newsletterSignUp(email).then(() => setSuccess(true));
      setEmail('');
      setError('');
    } else {
      setError('Please enter a valid email address');
    }
  };

  return (
    <Container>
      <p className="heading">{t('Sign up for newsletter!')}</p>
      <p className="subhead">
        {t(
          'Our weekly newsletter full of inspiration, podcasts, trends & news.'
        )}
      </p>
      {success && <p className="success">{t('Thank you for subscribing!')}</p>}
      <Form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="email"
          placeholder={t('Email Address')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" name="submit">
          {t('Subscribe Now')}
        </button>
      </Form>
      {error && <p className="error">{error}</p>}
    </Container>
  );
};

export default FooterNewsletter;
