import { validatePasssword } from '../../FreeTrialSignup/utils/FormValidation';
import { emailRegex } from './demoFormValidation';
import businessEmailValidation from './businessEmailValidation';

export const trialFormValidation = (data, setPasswordValidation) => {
  if (!data.firstname || data.firstname === '') {
    document
      .querySelector("input[name='firstname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='firstname']")
      .classList.add('is-invalid');
    return false;
  }
  if (!data.lastname || data.lastname === '') {
    document
      .querySelector("input[name='lastname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='lastname']")
      .classList.add('is-invalid');
    return false;
  }
  if (
    !data.email ||
    data.email === '' ||
    !emailRegex.test(data.email) ||
    !businessEmailValidation(data.email)
  ) {
    document.querySelector("input[name='email']").classList.remove('is-valid');
    document.querySelector("input[name='email']").classList.add('is-invalid');
    return false;
  }
  if (!data.phone || data.phone === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  if (!data.country || data.country === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  if (!data.countryCode || data.countryCode === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  if (!data.companyname || data.companyname === '') {
    document
      .querySelector("input[name='companyname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='companyname']")
      .classList.add('is-invalid');
    return false;
  }
  if (!data.jobtitle || data.jobtitle === '') {
    document
      .querySelector("input[name='jobtitle']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='jobtitle']")
      .classList.add('is-invalid');
    return false;
  }
  if (!data.teamsize || data.teamsize === '') {
    document
      .querySelector("select[name='teamsize']")
      .classList.remove('is-valid');
    document
      .querySelector("select[name='teamsize']")
      .classList.add('is-invalid');
    return false;
  }
  if (!validatePasssword(data.password, setPasswordValidation)) {
    document
      .querySelector("input[name='password']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='password']")
      .classList.add('is-invalid');
    return false;
  }
  return true;
};
