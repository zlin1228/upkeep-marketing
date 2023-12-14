import { captureException } from '@sentry/gatsby';
import validator from 'validator';
import PardotFormApi from '../../Utilities/pardotFormApi';

const resetForm = (setData, setValidation) => {
  setData({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
  });
  setValidation({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
  });
};

export const handleClass = (value, name, validation) => {
  if (validation[name]) return 'invalid';
  if (name === 'email') {
    if (!validator.isEmpty(value) && !validator.isEmail(value)) {
      return 'invalid';
    }
  }
  if (!validator.isEmpty(value)) return 'valid';
  return '';
};

export const handleSubmit = (
  e,
  formHandler,
  data,
  setData,
  validation,
  setValidation,
  setSuccess,
  setShowFormModal
) => {
  e.preventDefault();
  for (const key in validation) {
    const ignoredFields = ['jobTitle', 'company'];
    if (!ignoredFields.includes(key) && validator.isEmpty(data[key])) {
      setValidation({
        ...validation,
        [key]: 'Please complete required field',
      });
      return;
    }
    if (key === 'email') {
      if (!validator.isEmail(data[key])) {
        setValidation({
          ...validation,
          [key]: 'Must be a valid email address',
        });
        return;
      }
    }
  }
  PardotFormApi.bookContest(data, formHandler)
    .then(() => {
      setSuccess(true);
      resetForm(setData, setValidation);
      setTimeout(() => {
        setShowFormModal(false);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }, 5000);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error submitting book contest form', error);
      captureException(`Book Contest Form Error - ${error}`);
    });
};
