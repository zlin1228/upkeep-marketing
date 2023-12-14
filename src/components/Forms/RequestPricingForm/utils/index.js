import { navigate } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import validator from 'validator';
import PardotFormApi from '../../Utilities/pardotFormApi';

const resetForm = (setData, setValidation) => {
  setData({
    email: '',
    firstname: '',
    lastname: '',
    industry: '',
    phone: '',
    country: '',
    state: '',
    companyname: '',
    companysize: '',
    jobtitle: '',
    industrydetail: '',
    policy: '',
  });
  setValidation({
    email: '',
    firstname: '',
    lastname: '',
    industry: '',
    phone: '',
    country: '',
    state: '',
    companyname: '',
    companysize: '',
    jobtitle: '',
    industrydetail: '',
    policy: '',
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

export const handleSubmit = (e, data, setData, validation, setValidation) => {
  e.preventDefault();
  for (const key in validation) {
    const ignoredFields = [
      'phone',
      'country',
      'state',
      'companyname',
      'companysize',
      'jobtitle',
      'industrydetail',
    ];
    if (key === 'policy') {
      if (!data[key]) {
        setValidation({
          ...validation,
          [key]: 'Privacy policy must be accepted',
        });
        return;
      }
    }
    if (
      !ignoredFields.includes(key) &&
      key !== 'policy' &&
      validator.isEmpty(data[key])
    ) {
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
  console.log('Form is valid and ready to be submitted');
  delete data.policy;
  PardotFormApi.requestPricing(data)
    .then(() => {
      resetForm(setData, setValidation);
      navigate('/success?conversion=request-pricing');
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error submitting request pricing form', error);
      captureException(`Request Pricing Form Error - ${error}`);
    });
};
