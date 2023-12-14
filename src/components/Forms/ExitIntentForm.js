import React, { useState } from 'react';
import { captureException } from '@sentry/gatsby';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { FormStyles } from './styles/ExitIntentFormStyles';
import { exitIntentValidator, validateOnChange } from './Utilities/validator';
import PardotFormApi from './Utilities/pardotFormApi';

const ExitIntentForm = ({ formHandler, formLabel, download, setSuccess }) => {
  const form = 'exit-intent-form';
  const location = typeof window !== `undefined` && window.location.href;
  const [validation, setValidation] = useState({});
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    jobtitle: '',
    companysize: '',
    url: '',
    industry: '',
    industrydetail: '',
    country: '',
    state: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (exitIntentValidator(data, setValidation)) {
        data.url = location;
        PardotFormApi.exitIntent(data, formHandler);
        if (typeof window !== 'undefined' && download) {
          window.open(download, '_blank');
        }
        setSuccess(true);
      }
    } catch (error) {
      captureException(`Exit Intent Form Error - ${error}`);
      console.error(error);
    }
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, setValidation, form);
  };

  return (
    <FormStyles isFeedback={validation.feedback}>
      <form
        id="exit-intent-form"
        data-zi-mapped-form
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Work Email Address"
            className="form-control"
            value={data.email}
            onChange={e => handleChange(e)}
          />

          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <label htmlFor="firstname">
          <input
            type="text"
            name="firstname"
            id="firstname"
            autoComplete="given-name"
            placeholder="First Name"
            className="form-control"
            value={data.firstname}
            onChange={e => handleChange(e)}
          />
          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <label htmlFor="lastname">
          <input
            type="text"
            name="lastname"
            id="lastname"
            autoComplete="family-name"
            placeholder="Last Name"
            className="form-control"
            value={data.lastname}
            onChange={e => handleChange(e)}
          />
          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <PhoneInput
          inputProps={{ name: 'phone' }}
          disableDropdown
          country={data.country || null}
          value={data.phone}
          preferredCountries={['ca', 'us', 'gb', 'za']}
          placeholder="Mobile Number"
          onChange={phoneNumber => {
            setData({
              ...data,
              phone: phoneNumber,
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
          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <label htmlFor="jobtitle" className="d-none">
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            placeholder="Job Title"
            className="form-control"
            value={data.jobtitle}
            onChange={e => handleChange(e)}
          />
          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <label htmlFor="companysize" className="d-none">
          <input
            type="number"
            name="companysize"
            id="companysize"
            placeholder="Company Size"
            className="form-control"
            onChange={e => handleChange(e)}
          />
          <div className="invalid-feedback">{validation.feedback}</div>
        </label>
        <label htmlFor="industry" className="d-none">
          <input
            type="text"
            name="industry"
            id="industry"
            placeholder="Industry"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor="industrydetail" className="d-none">
          <input
            type="text"
            name="industrydetail"
            id="industrydetail"
            placeholder="Industry Details"
            className="form-control"
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor="country" className="d-none">
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
        <label htmlFor="state" className="d-none">
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
        <input type="submit" value={formLabel || 'See How You Measure Up'} />
      </form>
    </FormStyles>
  );
};

export default ExitIntentForm;
