import React, { useState } from 'react';
import { isValidEmail } from './Utilities/demoFormValidation';
import {
  Container,
  Wrapper,
  Success,
  Col,
  Heading,
  Subhead,
  Form,
  Label,
  Input,
  Validation,
  Button,
} from '../../styles/Components/Form/PressForm';

const PressForm = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [validation, setValidation] = useState('');

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValidEmail(email)) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'press-contact-form', email }),
      })
        .then(() => setSuccess(true))
        .catch(() => setSuccess(false));
    } else {
      setValidation('Please provide a valid email address');
    }
  };

  return (
    <Container>
      <Wrapper>
        {success ? (
          <Success>
            Thank you for contacting us with your press request submission. We
            will be in touch via email with next steps.
          </Success>
        ) : (
          <>
            <Col className="mb-3">
              <Heading>Reach out!</Heading>
              <Subhead>
                If you’re a member of the media and would like to talk to
                someone at UpKeep, please email us.
              </Subhead>
            </Col>
            <Col>
              <Form
                name="press-contact-form"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                onSubmit={e => handleSubmit(e)}
              >
                <input type="hidden" name="bot-field" />
                <Label htmlFor="email">
                  <Input
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                  />
                  {validation && <Validation>{validation}</Validation>}
                </Label>
                <Button name="submit" type="submit" value="Submit" />
              </Form>
            </Col>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default PressForm;
