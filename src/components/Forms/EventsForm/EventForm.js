import React, { useState } from 'react';
import { Link } from 'gatsby';
import { handleSubmit } from './utils';
import FormControl from './components/FormControl';
import Success from './components/Success';
import { Form, Heading, Subhead, Button, Policy } from './styles/index.styled';

const EventForm = ({ component }) => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyname: '',
    phone: '',
    jobtitle: '',
    companysize: '',
    industry: '',
    industrydetail: '',
    state: '',
    country: '',
  });
  const [validation, setValidation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyname: '',
    phone: '',
    jobtitle: '',
    companysize: '',
    industry: '',
    industrydetail: '',
    state: '',
    country: '',
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

  if (success) return <Success />;
  return (
    <Form
      id={component.id}
      onSubmit={e =>
        handleSubmit(
          e,
          component?.pardotFormHandler,
          data,
          setData,
          validation,
          setValidation,
          setSuccess
        )
      }
    >
      {component?.heading && <Heading>{component?.heading}</Heading>}
      {component?.subhead && <Subhead>{component?.subhead}</Subhead>}
      <FormControl
        type="text"
        name="firstName"
        value={data.firstName}
        placeholder="* First Name"
        handleChange={handleChange}
        validation={validation}
        autoComplete="given-name"
      />
      <FormControl
        type="text"
        name="lastName"
        value={data.lastName}
        placeholder="* Last Name"
        handleChange={handleChange}
        validation={validation}
        autoComplete="family-name"
      />
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
        name="companyname"
        value={data.companyname}
        placeholder="* Company"
        handleChange={handleChange}
        validation={validation}
        autoComplete="organization"
      />
      <Policy>
        By submitting this form you agree to the
        <Link to="/privacy"> UpKeep Privacy Policy </Link>
        surrounding marketing communications.
      </Policy>
      <Button type="submit" name="submit">
        {component?.callToAction}
      </Button>
    </Form>
  );
};

export default EventForm;
