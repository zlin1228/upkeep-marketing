import validator from 'validator';
import businessEmailValidation from './businessEmailValidation';
import { setPhoneValidation } from './phoneValidator';

const setInputStyles = field => {
  if (typeof window !== `undefined`) {
    const input = document.querySelector(`input[name='${field}']`);
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
};
const setPasswordInputStyles = status => {
  const passwordInput = document.querySelector("input[name='password']");
  if (!status) {
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
    return false;
  }
  passwordInput.classList.add('is-valid');
  passwordInput.classList.remove('is-invalid');
  return true;
};
const setValidationFeedback = (field, feedback, validation, setValidation) => {
  const result = validation.filter(v => !(field in v));
  setValidation([...result, { [field]: feedback }]);
};
export const getValidationFeeback = (validation, field) => {
  return validation.filter(item => item?.[field])[0]?.[field];
};
export const onSubmitValidator = (object, validation, setValidation) => {
  for (const field in object) {
    const value = object[field] || '';
    switch (field) {
      case 'email':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        if (!validator.isEmail(value) || !businessEmailValidation(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            `Provide a valid business email address to sign-up. If you don't have one reach out to us at <a rel="noopener norefferer" target="_blank" href="mailto:trial.signup@onupkeep.com">trial.signup@onupkeep.com</a> to set-up your Free Trial account.`,
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'firstname':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'lastname':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'phone':
        if (validator.isEmpty(value)) {
          setPhoneValidation(false);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        if (value.length < 8 || value.length > 16) {
          setPhoneValidation(false);
          setValidationFeedback(
            field,
            'Not a valid phone number',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'companyname':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'numberofusers':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'companysize':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'jobtitle':
        if (validator.isEmpty(value)) {
          setInputStyles(field);
          setValidationFeedback(
            field,
            'Please complete required field',
            validation,
            setValidation
          );
          return false;
        }
        break;
      case 'password':
        return passwordValidator(value, field, validation, setValidation);
      default:
        return true;
    }
  }
};
export const onChangeValidator = (e, validation, setValidation) => {
  const field = e.target.name;
  const value = e.target.value;
  if (validator.isEmpty(value)) {
    setInputStyles(field);
    setValidationFeedback(
      field,
      'Please complete required field',
      validation,
      setValidation
    );
    return false;
  }
  if (field === 'email') {
    if (!validator.isEmail(value) || !businessEmailValidation(value)) {
      setInputStyles(field);
      setValidationFeedback(
        field,
        `Provide a valid business email address to sign-up. If you don't have one reach out to us at <a rel="noopener norefferer" target="_blank" href="mailto:trial.signup@onupkeep.com">trial.signup@onupkeep.com</a> to set-up your Free Trial account.`,
        validation,
        setValidation
      );
      return false;
    }
  }
  if (field === 'phone') {
    if (value.length < 8 || value.length > 16) {
      setPhoneValidation(false);
      setValidationFeedback(
        field,
        'Not a valid phone number',
        validation,
        setValidation
      );
      return false;
    }
  }
  if (field === 'password') {
    return passwordValidator(value, field, validation, setValidation);
  }
  e.target.classList.remove('is-invalid');
  e.target.classList.add('is-valid');
};
const passwordValidator = (input, field, validation, setValidation) => {
  if (validator.isEmpty(input)) {
    setPasswordInputStyles(false);
    setValidationFeedback(
      field,
      'Field cannot be empty',
      validation,
      setValidation
    );
    return false;
  }
  if (/[A-Z]/.test(input) === false) {
    setPasswordInputStyles(false);
    setValidationFeedback(
      field,
      'Password must contain at least one uppercase letter.',
      validation,
      setValidation
    );
    return false;
  }
  if (/[a-z]/.test(input) === false) {
    setPasswordInputStyles(false);
    setValidationFeedback(
      field,
      'Password must contain at least one lowercase letter.',
      validation,
      setValidation
    );
    return false;
  }
  if (/(?=.*[0-9])/.test(input) === false) {
    setPasswordInputStyles(false);
    setValidationFeedback(
      field,
      'Password must contain at least one number.',
      validation,
      setValidation
    );
    return false;
  }
  if (input.length < 10) {
    setPasswordInputStyles(false);
    setValidationFeedback(
      field,
      'Password must be at least 10 characters long.',
      validation,
      setValidation
    );
    return false;
  }
  setPasswordInputStyles(true);
  return true;
};
