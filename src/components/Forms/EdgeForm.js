import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import validator, { validateOnChange } from './Utilities/validator';
import { setPhoneFeedback, validatePhone } from './Utilities/phoneValidator';
import handleZoomInfoStyles from './Utilities/setZoomInfoStyles';
import PardotFormApi from './Utilities/pardotFormApi';
import { FormStyles, UsePolicy } from './styles/FormStyles';
import Success from './components/Success';

const EdgeForm = ({ form }) => {
  const location = typeof window !== `undefined` && window.location.href;
  const [validation, setValidation] = useState({});
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    jobtitle: '',
    companysize: '',
    url: location,
    industry: '',
    industrydetail: '',
    country: '',
    state: '',
  });
  useEffect(() => setPhoneFeedback(), []);
  useEffect(() => handleZoomInfoStyles());

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (validator(data, setValidation, 'edge-form')) {
        data.url = location;
        PardotFormApi.edgeContact(data).then(() => setSuccess(true));
      }
    } catch (error) {
      captureException(`Edge Form Error - ${error}`);
      console.error(error);
    }
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, setValidation, 'edge-form');
  };

  return (
    <FormStyles>
      {success ? (
        <Success
          message="<h2>🎉 Success!</h2><p>Your submission has been received. We will be in contact with you soon.</p>"
          callToAction={{ label: 'Back to Edge Home', url: '/edge' }}
        />
      ) : (
        <form
          id="edge-form"
          data-zi-mapped-form
          onSubmit={e => handleSubmit(e)}
        >
          {form?.heading && <h3 className="form-title">{form?.heading}</h3>}
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
            disableDropdown="true"
            country={data.country || null}
            value={data.phone}
            preferredCountries={['ca', 'us', 'gb', 'za']}
            placeholder="Mobile Number"
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
            <div className="invalid-feedback">{validation.feedback}</div>
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
            <div className="invalid-feedback">{validation.feedback}</div>
          </label>
          <label htmlFor="companysize">
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
          <input
            type="submit"
            className="btn btn-primary"
            value={form?.callToAction || 'Contact Sales'}
          />
          <UsePolicy className="use-policy">
            <p>No Credit Card Required.</p>
            <p>
              By clicking above, you agree to the{' '}
              <Link to="/terms">UpKeep Terms of Use.</Link>
            </p>
          </UsePolicy>
        </form>
      )}
    </FormStyles>
  );
};

export default EdgeForm;
