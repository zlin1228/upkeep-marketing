import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import FormControl from './components/FormControl';
import truncateUrl from '../Utilities/truncateUrl';
import formatUrlValue from '../Utilities/formatUrlValue';
import {
  handlePhoneOnChange,
  handleSubmit,
  validateOnChange,
} from './utils/helpers';
import { Container, Form, Button, Footer } from './styles/index.styled';

const DownloadDetailForm = ({ component, location }) => {
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    companyname: '',
    companysize: '',
    url: truncateUrl(location?.href),
    phone: '',
    jobtitle: '',
    industry: '',
    industrydetail: '',
    country: '',
    countrycode: '',
    state: '',
  });
  const [validation, setValidation] = useState({
    email: '',
  });

  useEffect(() => {
    const url = formatUrlValue(location);
    setData({ ...data, url: truncateUrl(url) });
  }, []);

  const handleChange = e => {
    if (e.target.name === 'phone') {
      handlePhoneOnChange(e, validation, setValidation, data, setData);
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, e.target.name, validation, setValidation);
  };

  return (
    <Container>
      <p className="heading">Unlock Your All Access Pass</p>
      <Form
        id="download-form"
        data-zi-mapped-form
        onSubmit={e =>
          handleSubmit(
            e,
            data,
            setData,
            validation,
            setValidation,
            component?.pardotFormHandler,
            component?.internalName,
            component?.download
          )
        }
      >
        <FormControl
          id="email"
          type="email"
          name="email"
          placeholder="Business Email Address"
          required
          autoComplete="email"
          errorMessage={validation.email}
          value={data.email}
          handleChange={handleChange}
        />
        <FormControl
          id="firstname"
          type="text"
          name="firstname"
          placeholder="First Name"
          autoComplete="given-name"
          required
          errorMessage={validation.firstname}
          value={data.firstname}
          handleChange={handleChange}
        />
        <FormControl
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Last Name"
          autoComplete="family-name"
          required
          errorMessage={validation.lastname}
          value={data.lastname}
          handleChange={handleChange}
        />
        <FormControl
          id="phone"
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          autoComplete="off"
          required
          errorMessage={validation.phone}
          value={data.phone}
          handleChange={handleChange}
        />
        <FormControl
          id="companyname"
          type="text"
          name="companyname"
          placeholder="Company Name"
          autoComplete="organization"
          required
          errorMessage={validation.companyname}
          value={data.companyname}
          handleChange={handleChange}
        />
        <FormControl
          id="companysize"
          type="number"
          name="companysize"
          placeholder="Number of Employees"
          autoComplete="on"
          required
          errorMessage={validation.companysize}
          value={data.companysize}
          handleChange={handleChange}
        />
        <FormControl
          id="jobtitle"
          type="text"
          name="jobtitle"
          placeholder="Job Title"
          autoComplete="on"
          value={data.jobtitle}
          handleChange={handleChange}
          hidden
        />
        <FormControl
          id="industry"
          type="text"
          name="industry"
          placeholder="Industry"
          autoComplete="on"
          value={data.industry}
          handleChange={handleChange}
          hidden
        />
        <FormControl
          id="industrydetail"
          type="text"
          name="industrydetail"
          placeholder="Industry Details"
          autoComplete="on"
          value={data.industrydetail}
          handleChange={handleChange}
          hidden
        />
        <FormControl
          id="country"
          type="text"
          name="country"
          placeholder="Country"
          autoComplete="country"
          value={data.country}
          handleChange={handleChange}
          hidden
        />
        <FormControl
          id="state"
          type="text"
          name="state"
          placeholder="State"
          autoComplete="state"
          value={data.state}
          handleChange={handleChange}
          hidden
        />
        <Button type="submit">Download Now</Button>
      </Form>
      <Footer>
        <div className="use-policy">
          <p>
            By clicking above, you agree to the{' '}
            <Link to="/terms">UpKeep Terms of Use.</Link>
          </p>
        </div>
      </Footer>
    </Container>
  );
};

export default DownloadDetailForm;
