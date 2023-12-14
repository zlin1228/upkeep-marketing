import React, { useState, useEffect } from 'react';
import { captureException } from '@sentry/gatsby';
import Loader from '../Loader/Loader';
import CallToAction from '../CallToAction';
import PardotFormApi from './Utilities/pardotFormApi';
import partnerSignupUser from './Utilities/partnerSignupUser';
import {
  getValidationFeeback,
  onChangeValidator,
  onSubmitValidator,
  createPardotPayload,
  createPartnerSignupPayload,
} from './Utilities/partnerSignupFormUtils';
import {
  Container,
  Form,
  PrivacyPolicy,
  NetworkError,
} from './styles/PartnersSignupForm.styled';

const PartnersSignupForm = ({ component }) => {
  const [validation, setValidation] = useState([]);
  const [networkError, setNetworkError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    url: typeof window !== `undefined` && window.location.href,
  });

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (onSubmitValidator(data, setValidation)) {
        PardotFormApi.partnerSignup(createPardotPayload(data, location)).then(
          () => {
            setLoading(true);
            if (typeof window !== `undefined`) {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: 'partner-signup' });
            }
            partnerSignupUser(
              createPartnerSignupPayload(data, location),
              setData,
              setNetworkError,
              setLoading
            );
          }
        );
      }
    } catch (error) {
      captureException(`Partner Signup Form Error - ${error}`);
      console.error(error);
    }
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    onChangeValidator(e, validation, setValidation);
  };

  if (loading) return <Loader />;
  return (
    <Container loading={loading.toString()}>
      <h3 className="form-heading">{component?.heading}</h3>
      <Form id="partners-signup-form" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Work Email Address"
            className="form-control"
            value={data.email}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'email'),
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            autoComplete="new-password"
            type="password"
            name="password"
            id="password"
            placeholder="Create Password"
            className="form-control"
            value={data.password}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'password'),
            }}
          />
        </label>
        {networkError && <NetworkError>{networkError}</NetworkError>}
        <input
          name="submit"
          type="submit"
          className="btn btn-primary"
          value={component?.callToAction || 'Submit'}
        />
        <PrivacyPolicy>
          <h6 className="policy-label">
            By clicking above, you agree to the
            <CallToAction url="/terms" label=" UpKeep Terms of Use." />
          </h6>
        </PrivacyPolicy>
      </Form>
    </Container>
  );
};

export default PartnersSignupForm;
