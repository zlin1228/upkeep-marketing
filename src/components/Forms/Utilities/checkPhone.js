export default (phonenumber, setPhone) => {
  setPhone(phonenumber);
  if (!phonenumber || phonenumber.length < 8 || phonenumber.length > 16) {
    setPhoneInputInvalid();
  } else {
    setPhoneInputValid();
  }
};

export const setPhoneInputValid = () => {
  document.querySelector('.react-tel-input input').classList.add('is-valid');
  document
    .querySelector('.react-tel-input input')
    .classList.remove('is-invalid');
  document.querySelector('.react-tel-input').classList.add('is-valid');
  document.querySelector('.react-tel-input').classList.remove('is-invalid');
  document
    .querySelector('.react-tel-input input')
    .parentElement.parentElement.classList.remove('invalid');
};

export const setPhoneInputInvalid = () => {
  document.querySelector('.react-tel-input input').classList.remove('is-valid');
  document.querySelector('.react-tel-input input').classList.add('is-invalid');
  document.querySelector('.react-tel-input').classList.remove('is-valid');
  document.querySelector('.react-tel-input').classList.add('is-invalid');
  document
    .querySelector('.react-tel-input input')
    .parentElement.parentElement.classList.add('invalid');
};
