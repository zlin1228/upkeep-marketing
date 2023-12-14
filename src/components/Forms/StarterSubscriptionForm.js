import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import Loader from '../Loader/Loader';
import {
  onSubmitValidator,
  onChangeValidator,
  getValidationFeeback,
} from './Utilities/starterSubscriptionValidator';
import { setPhoneFeedback, validatePhone } from './Utilities/phoneValidator';
import handleZoomInfoStyles from './Utilities/setZoomInfoStyles';
import PardotFormApi from './Utilities/pardotFormApi';
import startSubscriptionSignup from './Utilities/startSubscriptionSignup';
import createPayloadForPardotStarterSubscription from './Utilities/createPayloadForStartSubscriptionPardot';
import createPayloadForTrialSignUp from './Utilities/createPayloadForTrialSignUp';
import {
  FormStyles,
  NetworkError,
  PrivacyPolicy,
  Loading,
} from './styles/StarterSubscription.styled';

const StarterSubscriptionForm = props => {
  const location = typeof window !== `undefined` && window.location.href;
  const [validation, setValidation] = useState([]);
  const [networkError, setNetworkError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    jobtitle: '',
    companysize: '',
    numberofusers: '',
    password: '',
    url: location,
    industry: '',
    industrydetail: '',
    country: '',
    state: '',
  });

  useEffect(() => handleZoomInfoStyles());
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('uk_user_data'));
    if (storageData) setData({ ...data, ...storageData });
    setPhoneFeedback();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (onSubmitValidator(data, validation, setValidation)) {
        PardotFormApi.starterSubscription(
          createPayloadForPardotStarterSubscription(data)
        ).then(() => {
          setLoading(true);
          if (typeof window !== `undefined`) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'free-trial-signup' });
          }
          startSubscriptionSignup(
            createPayloadForTrialSignUp(data, location),
            setData,
            setNetworkError,
            setLoading,
            {
              purchasePlan: props?.purchasePlan,
              teamsize: data?.numberofusers,
            }
          );
        });
      }
    } catch (error) {
      captureException(`Starter Subscription Form Error - ${error}`);
      console.error(error);
    }
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    onChangeValidator(e, validation, setValidation);
  };

  if (loading) {
    return (
      <Loading>
        <Loader />
      </Loading>
    );
  }

  return (
    <FormStyles>
      <form
        id="starter-subscription"
        data-zi-mapped-form
        onSubmit={e => handleSubmit(e)}
      >
        <h3 className="form-title">{props?.component?.heading}</h3>
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
        <label htmlFor="firstname">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            className="form-control"
            value={data.firstname}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'firstname'),
            }}
          />
        </label>
        <label htmlFor="lastname">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            className="form-control"
            value={data.lastname}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'lastname'),
            }}
          />
        </label>
        <PhoneInput
          inputProps={{ name: 'phone' }}
          disableDropdown
          country={data.country || null}
          value={data.phone}
          preferredCountries={['ca', 'us', 'gb', 'za']}
          placeholder="* Mobile Number"
          onChange={phoneNumber => {
            setData({
              ...data,
              phone: validatePhone(phoneNumber),
            });
          }}
        />
        <label htmlFor="companyname">
          <input
            type="text"
            name="companyname"
            id="companyname"
            placeholder="Company Name"
            className="form-control"
            value={data.companyname}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'companyname'),
            }}
          />
        </label>
        <label htmlFor="jobtitle">
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            placeholder="Job Title"
            className="form-control"
            value={data.jobtitle}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'jobtitle'),
            }}
          />
        </label>
        <label htmlFor="companysize">
          <input
            type="number"
            name="companysize"
            id="companysize"
            placeholder="Company Size"
            className="form-control"
            value={data.companysize}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'companysize'),
            }}
          />
        </label>
        <label htmlFor="numberofusers">
          <input
            type="number"
            name="numberofusers"
            id="numberofusers"
            placeholder="Number of Users"
            className="form-control required"
            value={data.numberofusers}
            onChange={e => handleChange(e)}
          />
          <div className="astericks" />
          <div
            className="invalid-feedback"
            dangerouslySetInnerHTML={{
              __html: getValidationFeeback(validation, 'numberofusers'),
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
        <label htmlFor="industry">
          <input
            type="text"
            name="industry"
            id="industry"
            placeholder="Industry"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor="industrydetail">
          <input
            type="text"
            name="industrydetail"
            id="industrydetail"
            placeholder="Industry Details"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor="country">
          <input
            type="text"
            name="country"
            id="country"
            autoComplete="country"
            placeholder="Country"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor="state">
          <input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            placeholder="State"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        {networkError && <NetworkError>{networkError}</NetworkError>}
        <input
          type="submit"
          className="btn btn-primary"
          value={props?.component?.callToAction || 'Continue with Purchase'}
        />
        <PrivacyPolicy className="mb-0">
          <h6 className="policy-label">
            By clicking above, you agree to the
            <Link to="/terms"> UpKeep Terms of Use.</Link>
          </h6>
        </PrivacyPolicy>
      </form>
    </FormStyles>
  );
};

export default StarterSubscriptionForm;
