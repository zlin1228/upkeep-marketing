import { checkPhoneValidation, emailRegex } from './demoFormValidation';
import businessEmailValidation from './businessEmailValidation';

export const checkActiveInput = (e, flag, cellForm) => {
  if (flag) {
    cellForm.current.classList.add('filled');
    cellForm.current.classList.add('active');
  } else {
    cellForm.current.classList.remove('active');
    if (e.target.value === '') {
      cellForm.current.classList.remove('filled');
    }
  }
};
const simplePasswordValidation = password => {
  if (/[A-Z]/.test(password) === false) return false;
  if (/[a-z]/.test(password) === false) return false;
  if (/(?=.*[0-9])/.test(password) === false) return false;
  if (password.length < 10) return false;
  return true;
};
export const handleInputChange = e => {
  if (e.target.value === '') {
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
    return false;
  }
  if (e.target.name === 'email') {
    if (
      !emailRegex.test(e.target.value.toLowerCase()) ||
      !businessEmailValidation(e.target.value)
    ) {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      return false;
    }
  }
  if (e.target.name === 'password') {
    if (!simplePasswordValidation(e.target.value)) {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      return false;
    }
  }
  if (e.target.type === 'select') {
    if (e.target.value === '') {
      return false;
    }
  }
  e.target.classList.remove('is-invalid');
  e.target.classList.add('is-valid');
};
export const handleSelect = (e, setDemo, demo) => {
  const selection = e.target.value;
  if (selection === '') {
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
    e.target.classList.add('is-valid');
  }
  setDemo({
    ...demo,
    teamsize: e.target.value,
  });
};
export const handlePhone = (
  phone,
  phoneSetter,
  formData,
  formSetter,
  country,
  countryCode
) => {
  phoneSetter(phone);
  const cellphone = document.querySelector('.react-tel-input input');
  checkPhoneValidation(phone, cellphone);
  formSetter({
    ...formData,
    phone,
    country,
    countryCode,
  });
};
