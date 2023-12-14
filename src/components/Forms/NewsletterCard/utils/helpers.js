import validator from 'validator';

export const validateEmail = (email, validation, setValidation) => {
  if (email === '') {
    setValidation({ ...validation, email: 'Please complete required field' });
    return false;
  }

  if (!validator.isEmail(email)) {
    setValidation({
      ...validation,
      email: `Please provide a valid email address`,
    });
    return false;
  }

  setValidation({ ...validation, email: '' });
  return true;
};
