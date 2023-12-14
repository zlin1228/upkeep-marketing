import axios from 'axios';
import validator from 'validator';
import { AsYouType } from 'libphonenumber-js';

import PardotFormApi from '../../Utilities/pardotFormApi';

const errorMessages = {
  firstName: 'Please complete required field',
  lastName: 'Please complete required field',
  company: 'Please complete required field',
  jobTitle: 'Please complete required field',
  address_one: 'Please complete required field',
  City: 'Please complete required field',
  State: 'Please complete required field',
  Zip: 'Please complete required field',
  T_Shirt_Size: 'Please complete required field',
};

export const getCountryCode = async (data, setData) => {
  const res = await axios.get('https://geolocation-db.com/json/');
  if (res) {
    setData({ ...data, countrycode: res.data.country_code.toLowerCase() });
  }
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

export const validateOnChange = (e, type, validation, setValidation) => {
  const { value } = e.target;

  if (type === 'email') {
    validateEmail(e, validation, setValidation);
    return false;
  }
  if (value === '') {
    setValidation({ ...validation, [type]: errorMessages[type] });
    return false;
  }
  setValidation({ ...validation, [type]: '' });
};

export const handlePhoneOnChange = (e, data, setData) => {
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
  setData({ ...data, Phone: e.target.value });
};

export const validateOnSubmit = (data, validation, setValidation) => {
  const {
    email,
    firstName,
    lastName,
    company,
    jobTitle,
    address_one,
    City,
    State,
    Zip,
    T_Shirt_Size,
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

  if (firstName === '') {
    setValidation({ ...validation, firstName: errorMessages.firstName });
    return {
      valid: false,
      error: 'firstName',
    };
  }
  if (lastName === '') {
    setValidation({ ...validation, lastName: errorMessages.lastName });
    return {
      valid: false,
      error: 'lastName',
    };
  }
  if (jobTitle === '') {
    setValidation({ ...validation, jobTitle: errorMessages.jobTitle });
    return {
      valid: false,
      error: 'jobTitle',
    };
  }
  if (company === '') {
    setValidation({ ...validation, company: errorMessages.company });
    return {
      valid: false,
      error: 'company',
    };
  }
  if (address_one === '') {
    setValidation({ ...validation, address_one: errorMessages.address_one });
    return {
      valid: false,
      error: 'address_one',
    };
  }
  if (City === '') {
    setValidation({ ...validation, City: errorMessages.City });
    return {
      valid: false,
      error: 'City',
    };
  }
  if (State === '') {
    setValidation({ ...validation, State: errorMessages.State });
    return {
      valid: false,
      error: 'State',
    };
  }
  if (Zip === '') {
    setValidation({ ...validation, Zip: errorMessages.Zip });
    return {
      valid: false,
      error: 'Zip',
    };
  }
  if (T_Shirt_Size === '') {
    setValidation({ ...validation, T_Shirt_Size: errorMessages.T_Shirt_Size });
    return {
      valid: false,
      error: 'T_Shirt_Size',
    };
  }

  return {
    valid: true,
    error: '',
  };
};

export const handleSubmit = (
  e,
  data,
  setData,
  validation,
  setValidation,
  setSuccess,
  customFormHandler
) => {
  e.preventDefault();

  try {
    const { valid, error } = validateOnSubmit(data, validation, setValidation);

    if (!valid) {
      throw new Error(`Invalid form data for field: ${error}`);
    }

    PardotFormApi.tshirtGiveaway(data, customFormHandler).then(() => {
      setData({
        email: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        address_one: '',
        city: '',
        state: '',
        shirtsize: '',
      });
      setSuccess(true);
    });
  } catch (error) {
    console.error(error);
  }
};
