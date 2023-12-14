import validator from 'validator';
import { navigate } from 'gatsby';
import { AsYouType } from 'libphonenumber-js';
import { captureException } from '@sentry/gatsby';

import PardotFormApi from '../../Utilities/pardotFormApi';
import hotjarIdentifyAPI from '../../../../utils/hotjarIdentify';

const errorMessages = {
  firstname: 'Please complete required field',
  lastname: 'Please complete required field',
  companyname: 'Please complete required field',
};

export const validateEmail = (e, validation, setValidation) => {
  const email = e.target.value;
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

export const validatePhone = (e, validation, setValidation) => {
  const phone = e.target.value;

  const phoneWithoutWhitespace = phone.replace(/\s/g, '');
  const phoneWithoutPlus = phoneWithoutWhitespace.replace('+', '');
  const formattedPhone = phoneWithoutPlus.replace(/-/g, '');
  const validPhoneLength =
    formattedPhone.length > 8 && formattedPhone.length < 16;

  if (phone === '') {
    setValidation({ ...validation, phone: 'Please complete required field' });
    return false;
  }
  if (!validPhoneLength) {
    setValidation({
      ...validation,
      phone: 'Not a valid phone number',
    });
    return false;
  }
  setValidation({ ...validation, phone: '' });
  return true;
};

export const validateOnChange = (e, type, validation, setValidation) => {
  const { value } = e.target;

  if (type === 'email') {
    validateEmail(e, validation, setValidation);
    return false;
  }
  if (type === 'phone') {
    validatePhone(e, validation, setValidation);
    return false;
  }
  if (value === '') {
    setValidation({ ...validation, [type]: errorMessages[type] });
    return false;
  }
  setValidation({ ...validation, [type]: '' });
};

export const handlePhoneOnChange = (
  e,
  validation,
  setValidation,
  data,
  setData
) => {
  e.preventDefault();
  const phone = new AsYouType('US').input(e.target.value);

  if (phone[0] !== '+' && data.countrycode === 'us') {
    e.target.value = `+1 ${phone}`;
  } else {
    e.target.value = phone;
  }
  if (e.target.value === '+') {
    e.target.value = '';
  }

  setData({ ...data, phone: e.target.value });
  validatePhone(e, validation, setValidation);
};

export const validateOnSubmit = (data, validation, setValidation) => {
  const { email, firstname, lastname, phone, companyname } = data;
  const validEmail = validateEmail(
    { target: { value: email } },
    validation,
    setValidation
  );
  if (!validEmail) {
    return {
      valid: false,
      error: 'email',
    };
  }

  if (firstname === '') {
    setValidation({ ...validation, firstname: errorMessages.firstname });
    return {
      valid: false,
      error: 'firstname',
    };
  }
  if (lastname === '') {
    setValidation({ ...validation, lastname: errorMessages.lastname });
    return {
      valid: false,
      error: 'lastname',
    };
  }
  if (phone === '') {
    setValidation({ ...validation, phone: errorMessages.phone });
    return {
      valid: false,
      error: 'phone',
    };
  }
  if (companyname === '') {
    setValidation({ ...validation, companyname: errorMessages.companyname });
    return {
      valid: false,
      error: 'companyname',
    };
  }
  return {
    valid: true,
    error: '',
  };
};

const createPardotDemoPayload = data => ({
  email: data?.email,
  firstname: data?.firstname,
  lastname: data?.lastname,
  phone: data?.phone,
  companyname: data?.companyname,
  jobtitle: data?.jobtitle,
  companysize: data?.companysize,
  industry: data?.industry,
  industrydetail: data?.industrydetail,
  country: data?.country,
  state: data?.state,
  url: data?.url,
});

export const handleSubmit = (
  e,
  data,
  setData,
  validation,
  setValidation,
  customFormHandler
) => {
  e.preventDefault();

  try {
    const { valid, error } = validateOnSubmit(data, validation, setValidation);

    if (!valid) {
      throw new Error(`Invalid form data for field: ${error}`);
    }

    PardotFormApi.signUp(createPardotDemoPayload(data), customFormHandler).then(
      () => {
        setData({
          email: '',
          firstname: '',
          lastname: '',
          phone: '',
          companyname: '',
          jobtitle: '',
          companysize: '',
          url: '',
          industry: '',
          industrydetail: '',
          country: '',
          countrycode: '',
          state: '',
        });
        hotjarIdentifyAPI(data);
        navigate('/success?conversion=demo');
      }
    );
  } catch (error) {
    captureException(`Demo Form Error - ${error}`);
    console.error(error);
  }
};
