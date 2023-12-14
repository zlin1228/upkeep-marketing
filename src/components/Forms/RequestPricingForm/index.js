import React, { useState } from 'react';
import { Link } from 'gatsby';
import FormControl from './components/FormControl';
import { handleSubmit } from './utils/index';
import { Error } from './styles/FormControl.styled';
import { Form, Heading, Subhead, Policy, Button } from './styles/index.styled';

const RequestPricingForm = ({ component }) => {
  const location = typeof window !== `undefined` && window.location.href;
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    industry: '',
    phone: '',
    country: '',
    state: '',
    companyname: '',
    companysize: '',
    jobtitle: '',
    industrydetail: '',
    policy: '',
    url: location,
  });
  const [validation, setValidation] = useState({
    email: '',
    firstname: '',
    lastname: '',
    industry: '',
    phone: '',
    country: '',
    state: '',
    companyname: '',
    companysize: '',
    jobtitle: '',
    industrydetail: '',
    policy: '',
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setValidation({
      ...validation,
      [e.target.name]: '',
    });
  };

  return (
    <Form
      id="request-pricing-form"
      data-zi-mapped-form
      onSubmit={e => handleSubmit(e, data, setData, validation, setValidation)}
    >
      {component?.heading && <Heading>{component?.heading}</Heading>}
      {component?.subhead && <Subhead>{component?.subhead}</Subhead>}
      <FormControl
        type="text"
        name="email"
        value={data.email}
        placeholder="* Email Address"
        handleChange={handleChange}
        validation={validation}
        autoComplete="email"
      />
      <FormControl
        type="text"
        name="firstname"
        value={data.firstname}
        placeholder="* First Name"
        handleChange={handleChange}
        validation={validation}
        autoComplete="given-name"
      />
      <FormControl
        type="text"
        name="lastname"
        value={data.lastname}
        placeholder="* Last Name"
        handleChange={handleChange}
        validation={validation}
        autoComplete="family-name"
      />
      <FormControl
        type="text"
        name="industry"
        value={data.industry}
        placeholder="* Industry"
        handleChange={handleChange}
        validation={validation}
        autoComplete="organization"
      />
      <FormControl
        type="tel"
        name="phone"
        value={data.phone}
        placeholder="Mobile Number"
        handleChange={handleChange}
        validation={validation}
        autoComplete="tel"
        hidden="true"
      />
      <FormControl
        type="country"
        name="country"
        value={data.country}
        placeholder="Country"
        handleChange={handleChange}
        validation={validation}
        autoComplete="country"
        hidden="true"
      />
      <FormControl
        type="text"
        name="state"
        value={data.state}
        placeholder="State"
        handleChange={handleChange}
        validation={validation}
        autoComplete="address-level1"
        hidden="true"
      />
      <FormControl
        type="text"
        name="companyname"
        value={data.companyname}
        placeholder="Company Name"
        handleChange={handleChange}
        validation={validation}
        autoComplete="organization"
        hidden="true"
      />
      <FormControl
        type="text"
        name="companysize"
        value={data.companysize}
        placeholder="Company Size"
        handleChange={handleChange}
        validation={validation}
        hidden="true"
      />
      <FormControl
        type="text"
        name="jobtitle"
        value={data.jobtitle}
        placeholder="Job Title"
        handleChange={handleChange}
        validation={validation}
        autoComplete="job-title"
        hidden="true"
      />
      <FormControl
        type="text"
        name="industrydetail"
        value={data.industrydetail}
        placeholder="Industry Detail"
        handleChange={handleChange}
        validation={validation}
        hidden="true"
      />
      <Policy>
        <input
          type="checkbox"
          name="policy"
          id="policy"
          value={data.policy}
          onChange={() => {
            setData({
              ...data,
              policy: !data.policy,
            });
          }}
        />
        By submitting this form you agree to the UpKeep
        <Link to="/privacy"> privacy policy </Link>
        surrounding marketing communications.
      </Policy>
      {!data.policy && <Error>{validation.policy}</Error>}
      <Button type="submit" name="submit">
        {component?.callToAction || 'Submit'}
      </Button>
    </Form>
  );
};

export default RequestPricingForm;
