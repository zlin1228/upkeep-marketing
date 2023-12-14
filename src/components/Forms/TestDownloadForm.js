import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { validateOnChange, downloadValidator } from './Utilities/validator';
import { setPhoneFeedback, validatePhone } from './Utilities/phoneValidator';
import handleZoomInfoStyles from './Utilities/setZoomInfoStyles';
import PardotFormApi from './Utilities/pardotFormApi';
import { FormStyles, UsePolicy } from './styles/FormStyles';

const DownloadForm = ({ form }) => {
  // TODO: remove this and inherit download from props when done testing
  const tempDownload =
    'https://www.datocms-assets.com/38028/1616694098-theessentialcmmsimplementationguide.pdf';
  const location = typeof window !== `undefined` && window.location.href;
  const [validation, setValidation] = useState({});
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    jobtitle: '',
    teamsize: '',
    url: location,
    country: '',
    state: '',
    industry: '',
    industrydetail: '',
  });
  useEffect(() => setPhoneFeedback(), []);
  useEffect(() => handleZoomInfoStyles());

  // TODO: remove this when done testing
  useEffect(() => console.log(validation), [validation]);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (downloadValidator(data, setValidation)) {
        data.url = location;
        // TODO: remove this when done testing
        console.log('Form Data sent to Pardot: ', data);
        PardotFormApi.gatedContent(data).then(() => {
          if (typeof window !== 'undefined' && tempDownload) {
            window.open(tempDownload, '_blank');
          }
          navigate('/resource-library');
        });
      }
    } catch (error) {
      captureException(`Download Form Error - ${error}`);
      console.error(error);
    }
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, setValidation);
  };

  return (
    <FormStyles className="form-styles">
      <form id="download-form" data-zi-mapped-form>
        <h3 className="form-title">Unlock Your All Access Pass</h3>
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
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: false,
          }}
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
        <label htmlFor="teamsize" className="d-none">
          <input
            type="number"
            name="teamsize"
            id="teamsize"
            placeholder="Employee Size"
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
        <input
          type="submit"
          className="btn btn-primary"
          value="Download Now"
          onClick={e => handleSubmit(e)}
        />
        <UsePolicy className="use-policy">
          <p>No Credit Card Required.</p>
          <p>
            By clicking above, you agree to the{' '}
            <Link to="/terms">UpKeep Terms of Use.</Link>
          </p>
        </UsePolicy>
      </form>
    </FormStyles>
  );
};

export default DownloadForm;
