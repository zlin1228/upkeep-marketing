import axios from 'axios';
import validator from 'validator';
import { navigate } from 'gatsby';
import { AsYouType } from 'libphonenumber-js';
import { captureException } from '@sentry/gatsby';

import PardotFormApi from '../../Utilities/pardotFormApi';

export const downloadFile = async (filename, downloadUrl) => {
  const response = await axios.get(downloadUrl, {
    responseType: 'blob',
  });
  const blob = response.data;
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'true');
  link.setAttribute('target', '_blank');
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  window.open(link.href);
  document.body.removeChild(link);
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
  if (type === 'email') {
    validateEmail(e, validation, setValidation);
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
  const { email } = data;
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

  return {
    valid: true,
    error: '',
  };
};

const createPardotDownloadPayload = data => ({
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
  customFormHandler,
  downloadName,
  downloadUrl
) => {
  e.preventDefault();

  try {
    const { valid, error } = validateOnSubmit(data, validation, setValidation);

    if (!valid) {
      throw new Error(`Invalid form data for field: ${error}`);
    }

    PardotFormApi.gatedContent(
      createPardotDownloadPayload(data),
      customFormHandler
    ).then(() => {
      if (downloadUrl) downloadFile(downloadName, downloadUrl);
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
      navigate('/resources/asset-operations-maintenance-hub');
    });
  } catch (error) {
    captureException(`Download Form Error - ${error}`);
    console.error(error);
  }
};
