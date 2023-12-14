import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { validateEmail } from '../utils/helpers';
import PardotFormApi from '../../Utilities/pardotFormApi';
import { Container, FormGroup } from '../styles/Form.styled';

const Form = ({ success, setSuccess }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState({
    email: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (validateEmail(email, validation, setValidation)) {
      PardotFormApi.newsletterSignUp(email).then(() => {
        setSuccess(true);
        setEmail('');
      });
    }
  };

  if (success) return null;
  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <input
          type="text"
          placeholder={`${t('Email Address')}*`}
          onChange={e => {
            setEmail(e.target.value);
            validateEmail(e.target.value, validation, setValidation);
          }}
        />
        <button type="submit">{t('Submit')}</button>
      </FormGroup>
      {validation.email && <p className="error">{validation.email}</p>}
    </Container>
  );
};

export default Form;
