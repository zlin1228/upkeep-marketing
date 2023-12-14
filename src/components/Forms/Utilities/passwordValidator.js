import validator from 'validator';
/**
 * @desc validates password and sets feedback
 */
export default (password, handler) => {
  if (validator.isEmpty(password)) {
    setPasswordValidation(false);
    handler({ feedback: 'Field cannot be empty', field: 'password' });
    return false;
  }
  if (/[A-Z]/.test(password) === false) {
    setPasswordValidation(false);
    handler({
      feedback: 'Password must contain at least one uppercase letter.',
      field: 'password',
    });
    return false;
  }
  if (/[a-z]/.test(password) === false) {
    setPasswordValidation(false);
    handler({
      feedback: 'Password must contain at least one lowercase letter.',
      field: 'password',
    });
    return false;
  }
  if (/(?=.*[0-9])/.test(password) === false) {
    setPasswordValidation(false);
    handler({
      feedback: 'Password must contain at least one number.',
      field: 'password',
    });
    return false;
  }
  if (password.length < 10) {
    setPasswordValidation(false);
    handler({
      feedback: 'Password must be at least 10 characters long.',
      field: 'password',
    });
    return false;
  }
  setPasswordValidation(true);
  return true;
};

/**
 * @desc sets password validation conditional styling
 */
const setPasswordValidation = status => {
  const passwordInput = document.querySelector("input[name='password']");
  if (!status) {
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
    return false;
  }
  passwordInput.classList.add('is-valid');
  passwordInput.classList.remove('is-invalid');
  return true;
};
