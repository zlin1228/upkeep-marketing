/* eslint-disable camelcase */
import validator from 'validator';
import { AsYouType } from 'libphonenumber-js';
import { captureException } from '@sentry/gatsby';

import PardotFormApi from '../../Utilities/pardotFormApi';
import trialSignupUser from '../../Utilities/trialSignupUser';

const errorMessages = {
  firstname: 'Please complete required field',
  lastname: 'Please complete required field',
  companyname: 'Please complete required field',
  Number_of_Technicians__c: 'Please complete required field',
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
      email: `Provide a valid email address to sign-up.`,
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

export const validatePassword = (e, validation, setValidation) => {
  const password = e.target.value;
  if (validator.isEmpty(password)) {
    setValidation({
      ...validation,
      password: 'Please complete required field',
    });
    return false;
  }
  if (/[A-Z]/.test(password) === false) {
    setValidation({
      ...validation,
      password: 'Password must contain at least one uppercase letter.',
    });
    return false;
  }
  if (/[a-z]/.test(password) === false) {
    setValidation({
      ...validation,
      password: 'Password must contain at least one lowercase letter.',
    });
    return false;
  }
  if (/(?=.*[0-9])/.test(password) === false) {
    setValidation({
      ...validation,
      password: 'Password must contain at least one number.',
    });
    return false;
  }
  if (password.length < 10) {
    setValidation({
      ...validation,
      password: 'Password must be at least 10 characters long.',
    });
    return false;
  }
  setValidation({ ...validation, password: '' });
  return true;
};

export const validateOnChange = (e, type, validation, setValidation) => {
  const { value } = e.target;
  if (type === 'email') {
    validateEmail(e, validation, setValidation);
    return false;
  }
  if (type === 'password') {
    validatePassword(e, validation, setValidation);
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
  const {
    email,
    firstname,
    lastname,
    phone,
    companyname,
    Number_of_Technicians__c,
  } = data;
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
  const validPassword = validatePassword(
    { target: { value: data.password } },
    validation,
    setValidation
  );
  if (!validPassword) {
    return {
      valid: false,
      error: 'password',
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
  if (Number_of_Technicians__c === '') {
    setValidation({
      ...validation,
      Number_of_Technicians__c: errorMessages.Number_of_Technicians__c,
    });
    return {
      valid: false,
      error: 'Number_of_Technicians__c',
    };
  }
  return {
    valid: true,
    error: '',
  };
};

const createPardotTrialSignupPayload = data => ({
  email: data?.email,
  firstname: data?.firstname,
  lastname: data?.lastname,
  phone: data?.phone,
  companyname: data?.companyname,
  jobtitle: data?.jobtitle,
  Number_of_Technicians__c: data?.Number_of_Technicians__c,
  industry: data?.industry,
  industrydetail: data?.industrydetail,
  country: data?.country,
  state: data?.state,
  url: data?.url,
});

const createUpKeepTrialSignUpPayload = (data, location) => ({
  email: data?.email?.toLowerCase().trim(),
  password: data?.password?.replace(/%20/g, '+'),
  phoneNumber: data?.phone,
  platform: 'web',
  source: location,
  firstName: data?.firstname,
  lastName: data?.lastname,
  jobTitle: data?.jobtitle || 'n/a',
  companyName: data?.companyname,
});

export const handleSubmit = (
  e,
  data,
  setData,
  validation,
  setValidation,
  setNetworkError,
  setLoading,
  location
) => {
  e.preventDefault();

  try {
    const { valid, error } = validateOnSubmit(data, validation, setValidation);

    if (!valid) {
      throw new Error(`Invalid form data for field: ${error}`);
    }

    const isSalesForm = location.pathname === '/free-trial-signup-sales';

    if (isSalesForm) {
      PardotFormApi.freeTrialSignupSales(
        createPardotTrialSignupPayload(data)
      ).then(() => {
        setLoading(true);
        if (typeof window !== `undefined`) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'free-trial-signup' });
        }
        trialSignupUser(
          createUpKeepTrialSignUpPayload(data, location.href),
          setData,
          setNetworkError,
          setLoading
        );
      });
      return;
    }

    PardotFormApi.freeTrialSignup(createPardotTrialSignupPayload(data)).then(
      () => {
        setLoading(true);
        if (typeof window !== `undefined`) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'free-trial-signup' });
        }
        trialSignupUser(
          createUpKeepTrialSignUpPayload(data, location.href),
          setData,
          setNetworkError,
          setLoading
        );
      }
    );
  } catch (error) {
    captureException(`Trial Form Error - ${error}`);
    console.error(error);
  }
};
