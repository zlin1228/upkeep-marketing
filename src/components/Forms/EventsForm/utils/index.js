import { captureException } from '@sentry/gatsby';
import validator from 'validator';
import PardotFormApi from '../../Utilities/pardotFormApi';

const resetForm = (setData, setValidation) => {
  setData({
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
  setValidation({
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
  setSuccess
) => {
  e.preventDefault();
  for (const key in validation) {
    const ignoredFields = [
      'phone',
      'jobtitle',
      'companysize',
      'industry',
      'industrydetail',
      'state',
      'country',
    ];
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
