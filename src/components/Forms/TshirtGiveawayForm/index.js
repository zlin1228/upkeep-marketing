import React, { useState } from 'react';
import { Link } from 'gatsby';
import FormControl from './components/FormControl';
import FormDropdown from './components/FormDropdown';
import Success from './components/Success';
import {
  handleSubmit,
  validateOnChange,
  handlePhoneOnChange,
} from './utils/helpers';
import { Container, Header, Form, Button, Footer } from './styles/index.styled';

const TshirtGiveawayForm = ({ component }) => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    address_one: '',
    City: '',
    State: '',
    Zip: '',
    Phone: '',
    T_Shirt_Size: '',
  });
  const [validation, setValidation] = useState({
    email: '',
    firstName: '',
    lastname: '',
    jobTitle: '',
    company: '',
    address_one: '',
    City: '',
    State: '',
    Zip: '',
    T_Shirt_Size: '',
  });

  const handleChange = e => {
    if (e.target.name === 'Phone') {
      handlePhoneOnChange(e, data, setData);
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, e.target.name, validation, setValidation);
  };

  if (success) return <Success />;
  return (
    <Container>
      {component?.heading && <Header>{component.heading}</Header>}
      <Form
        id="demo-form"
        data-zi-mapped-form
        onSubmit={e =>
          handleSubmit(
            e,
            data,
            setData,
            validation,
            setValidation,
            setSuccess,
            component?.pardotFormHandler
          )
        }
      >
        <FormControl
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          autoComplete="email"
          errorMessage={validation.email}
          data={data}
          value={data.email}
          handleChange={handleChange}
        />
        <FormControl
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          autoComplete="given-name"
          required
          errorMessage={validation.firstName}
          data={data}
          setData={setData}
          value={data.firstName}
          handleChange={handleChange}
        />
        <FormControl
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          required
          errorMessage={validation.lastName}
          data={data}
          setData={setData}
          value={data.lastName}
          handleChange={handleChange}
        />
        <FormControl
          id="jobTitle"
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          autoComplete="organization-title"
          required
          errorMessage={validation.jobTitle}
          data={data}
          setData={setData}
          value={data.jobTitle}
          handleChange={handleChange}
        />
        <FormControl
          id="company"
          type="text"
          name="company"
          placeholder="Company Name"
          autoComplete="organization"
          required
          errorMessage={validation.company}
          data={data}
          setData={setData}
          value={data.company}
          handleChange={handleChange}
        />
        <FormControl
          id="address_one"
          type="text"
          name="address_one"
          placeholder="Address"
          autoComplete="street-address"
          required
          errorMessage={validation.address_one}
          data={data}
          setData={setData}
          value={data.address_one}
          handleChange={handleChange}
        />
        <FormControl
          id="City"
          type="text"
          name="City"
          placeholder="City"
          autoComplete="city"
          required
          errorMessage={validation.City}
          data={data}
          setData={setData}
          value={data.City}
          handleChange={handleChange}
        />
        <FormControl
          id="State"
          type="text"
          name="State"
          placeholder="State"
          autoComplete="State"
          required
          errorMessage={validation.State}
          data={data}
          setData={setData}
          value={data.State}
          handleChange={handleChange}
        />
        <FormControl
          id="Zip"
          type="text"
          name="Zip"
          placeholder="Postal Code"
          autoComplete="postal-code"
          required
          errorMessage={validation.Zip}
          data={data}
          setData={setData}
          value={data.Zip}
          handleChange={handleChange}
        />
        <FormControl
          id="Phone"
          type="tel"
          name="Phone"
          placeholder="Mobile Number"
          autoComplete="off"
          data={data}
          setData={setData}
          value={data.Phone}
          handleChange={handleChange}
        />
        <FormDropdown
          id="T_Shirt_Size"
          name="T_Shirt_Size"
          placeholder="Shirt Size"
          autoComplete="off"
          required
          errorMessage={validation.T_Shirt_Size}
          data={data}
          setData={setData}
          value={data.T_Shirt_Size}
          handleChange={handleChange}
          options={[
            { value: 'X-SMALL', label: 'X-SMALL' },
            { value: 'SMALL', label: 'SMALL' },
            { value: 'MEDIUM', label: 'MEDIUM' },
            { value: 'LARGE', label: 'LARGE' },
            { value: 'X-LARGE', label: 'X-LARGE' },
            { value: '2X-LARGE', label: '2X-LARGE' },
          ]}
        />
        <Button type="submit">{component?.button || 'Submit'}</Button>
      </Form>
      <Footer>
        By submitting this form you agree to the
        <Link to="/privacy"> UpKeep Privacy Policy </Link>
        surrounding marketing communications. This entry to win a free UpKeep
        AOM T-Shirt is subject to the Sweepstakes rules that can be accessed
        <Link to="/Asset-Operations-Book-Sweepstakes-Rules"> here.</Link>
      </Footer>
    </Container>
  );
};

export default TshirtGiveawayForm;
