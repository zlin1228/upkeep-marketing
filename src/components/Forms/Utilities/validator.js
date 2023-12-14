import validator from 'validator';
import passwordValidator from './passwordValidator';
import businessEmailValidation from './businessEmailValidation';
import { setPhoneValidation } from './phoneValidator';

/**
 * @desc validates form submission
 * @fields email, firstname, lastname, phone, companyname, teamsize, jobtitle, password
 */
export default (object, handler, form) => {
  for (const field in object) {
    const value = object[field] || '';
    switch (field) {
      case 'email':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        if (
          form === 'demo-form' ||
          form === 'download-form' ||
          form === 'edge-form' ||
          form === 'exit-intent-form'
        ) {
          if (!validator.isEmail(value)) {
            setValidationStyles(field);
            handler({
              feedback: 'Please provide a valid email address',
              field,
            });
            return false;
          }
          break;
        } else {
          if (!validator.isEmail(value) || !businessEmailValidation(value)) {
            setValidationStyles(field);
            handler({
              feedback: `Provide a valid business email address to sign-up. If you don't have one reach out to us at trial.signup@onupkeep.com to set-up your Free Trial account.`,
              field,
            });
            return false;
          }
          break;
        }
      case 'firstname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'lastname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'phone':
        if (validator.isEmpty(value)) {
          setPhoneValidation(false);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        if (value.length < 8 || value.length > 16) {
          setPhoneValidation(false);
          handler({ feedback: 'Not a valid phone number', field });
          return false;
        }
        break;
      case 'companyname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'companysize':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'jobtitle':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'password':
        return passwordValidator(value, handler);
      default:
        return true;
    }
  }
};

/**
 * @desc validates form input fields onChange
 */
export const validateOnChange = (e, handler, form) => {
  const field = e.target.name;
  const value = e.target.value;
  if (validator.isEmpty(value)) {
    setValidationStyles(field);
    handler({ feedback: 'Please complete required field', field });
    return false;
  }
  if (field === 'email') {
    if (
      form === 'demo-form' ||
      form === 'download-form' ||
      form === 'edge-form' ||
      form === 'exit-intent-form'
    ) {
      if (!validator.isEmail(value)) {
        setValidationStyles(field);
        handler({
          feedback: 'Please provide a valid email address',
          field,
        });
        return false;
      }
    } else if (!validator.isEmail(value) || !businessEmailValidation(value)) {
      setValidationStyles(field);
      handler({
        feedback: `
        Provide a valid business email address to sign-up. 
        If you don't have one reach out to us at 
        <a rel="noopener norefferer" target="_blank" href="mailto:trial.signup@onupkeep.com">
        trial.signup@onupkeep.com</a> to set-up your Free Trial account.`,
        field,
      });
      return false;
    }
  }
  if (field === 'phone') {
    if (value.length < 8 || value.length > 16) {
      setPhoneValidation(false);
      handler({ feedback: 'Not a valid phone number', field });
      return false;
    }
  }
  if (field === 'password') {
    return passwordValidator(value, handler);
  }
  e.target.classList.remove('is-invalid');
  e.target.classList.add('is-valid');
};

/**
 * @desc sets validation feedback text based on conditional styling
 */
const setValidationStyles = field => {
  if (typeof window !== `undefined`) {
    const input = document.querySelector(`input[name='${field}']`);
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
};

/**
 * @desc download form validator
 * @fields email, firstname, lastname, companyname
 */
export const downloadValidator = (object, handler) => {
  for (const field in object) {
    const value = object[field] || '';
    switch (field) {
      case 'email':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        if (!validator.isEmail(value)) {
          setValidationStyles(field);
          handler({
            feedback: 'Please provide a valid email address',
            field,
          });
          return false;
        }
        break;
      case 'firstname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'lastname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;

      case 'companyname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      default:
        return true;
    }
  }
};

/**
 * @desc exit-intent form validator
 * @fields email, firstname, lastname, companyname
 */
export const exitIntentValidator = (object, handler) => {
  for (const field in object) {
    const value = object[field] || '';
    switch (field) {
      case 'email':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        if (!validator.isEmail(value)) {
          setValidationStyles(field);
          handler({
            feedback: 'Please provide a valid email address',
            field,
          });
          return false;
        }
        break;
      case 'firstname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      case 'lastname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;

      case 'companyname':
        if (validator.isEmpty(value)) {
          setValidationStyles(field);
          handler({ feedback: 'Please complete required field', field });
          return false;
        }
        break;
      default:
        return true;
    }
  }
};
