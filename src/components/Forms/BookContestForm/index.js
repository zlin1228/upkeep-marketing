import React, { useState } from 'react';
import { Link } from 'gatsby';
import FormControl from './components/FormControl';
import useBookContestForm from './utils/useBookContestForm';
import { handleSubmit } from './utils';
import { Form, Heading, Subhead, Button, Policy } from './styles/index.styled';
import Success from './components/Success';

const BookContestForm = ({ setShowFormModal }) => {
  const { datoCmsWebsiteForm } = useBookContestForm();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
  });
  const [validation, setValidation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
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
      id={datoCmsWebsiteForm.id}
      onSubmit={e =>
        handleSubmit(
          e,
          datoCmsWebsiteForm?.pardotFormHandler,
          data,
          setData,
          validation,
          setValidation,
          setSuccess,
          setShowFormModal
        )
      }
    >
      {datoCmsWebsiteForm?.heading && (
        <Heading>{datoCmsWebsiteForm?.heading}</Heading>
      )}
      {datoCmsWebsiteForm?.subhead && (
        <Subhead>{datoCmsWebsiteForm?.subhead}</Subhead>
      )}
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
        name="jobTitle"
        value={data.jobTitle}
        placeholder="Job Title"
        handleChange={handleChange}
        validation={validation}
        autoComplete="organization-title"
      />
      <FormControl
        type="text"
        name="company"
        value={data.company}
        placeholder="Company"
        handleChange={handleChange}
        validation={validation}
        autoComplete="organization"
      />
      <Policy>
        By submitting this form you agree to the
        <Link to="/privacy"> UpKeep Privacy Policy </Link>
        surrounding marketing communications. This entry to win a copy of Asset
        Operations is subject to the Sweepstakes rules that can be accessed
        <Link to="/Asset-Operations-Book-Sweepstakes-Rules"> here.</Link>
      </Policy>
      <Button type="submit" name="submit">
        {datoCmsWebsiteForm?.callToAction}
      </Button>
    </Form>
  );
};

export default BookContestForm;
