/**
 * @desc validates react tel input
 */
export const validatePhone = phoneNumber => {
  const validPhone = phoneNumber.length > 8 && phoneNumber.length < 16;
  if (!validPhone) {
    setPhoneValidation(false);
  } else {
    setPhoneValidation(true);
    return phoneNumber;
  }
};

/**
 * @desc sets react tel input feedback text
 */
export const setPhoneFeedback = () => {
  const reactTelInput = document.querySelector('.react-tel-input');
  const invalidFeedback = document.createElement('div');
  invalidFeedback.className = 'invalid-feedback';
  invalidFeedback.innerText = 'Must be a valid phone number';
  reactTelInput?.append(invalidFeedback);
};

/**
 * @desc handles react tel input validation classes
 */
export const setPhoneValidation = status => {
  const phoneInput = document.querySelector('.react-tel-input input');
  if (!status) {
    phoneInput.classList.remove('is-valid');
    phoneInput.classList.add('is-invalid');
    return false;
  }
  phoneInput.classList.add('is-valid');
  phoneInput.classList.remove('is-invalid');
  return true;
};
