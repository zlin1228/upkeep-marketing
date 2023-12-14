export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValidEmail = email =>
  emailRegex.test(String(email).toLowerCase());

export const checkFormValidation = demo => {
  if (typeof window !== `undefined`) {
    window.localStorage.setItem('demoFormData', JSON.stringify(demo));
  }
  if (!demo.email || demo.email === '' || !emailRegex.test(demo.email)) {
    document.querySelector("input[name='email']").classList.remove('is-valid');
    document.querySelector("input[name='email']").classList.add('is-invalid');
    return false;
  }
  if (!demo.firstname || demo.firstname === '') {
    document
      .querySelector("input[name='firstname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='firstname']")
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.lastname || demo.lastname === '') {
    document
      .querySelector("input[name='lastname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='lastname']")
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.companyname || demo.companyname === '') {
    document
      .querySelector("input[name='companyname']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='companyname']")
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.jobtitle || demo.jobtitle === '') {
    document
      .querySelector("input[name='jobtitle']")
      .classList.remove('is-valid');
    document
      .querySelector("input[name='jobtitle']")
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.teamsize || demo.teamsize === '') {
    document
      .querySelector("select[name='teamsize']")
      .classList.remove('is-valid');
    document
      .querySelector("select[name='teamsize']")
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.phone || demo.phone === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.country || demo.country === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  if (!demo.countryCode || demo.countryCode === '') {
    document
      .querySelector('.react-tel-input input')
      .classList.remove('is-valid');
    document
      .querySelector('.react-tel-input input')
      .classList.add('is-invalid');
    return false;
  }
  return true;
};
export const checkPhoneValidation = (phone, el) => {
  if (phone === '' || phone.length < 9) {
    el.classList.remove('is-valid');
    el.classList.add('is-invalid');
  } else {
    el.classList.add('is-valid');
    el.classList.remove('is-invalid');
  }
};

export const demoPopupFormValidation = (demo, setError) => {
  if (!demo.email || demo.email === '' || !emailRegex.test(demo.email)) {
    setError(true);
    return false;
  }
  if (!demo.firstname || demo.firstname === '') {
    setError(true);
    return false;
  }
  if (!demo.lastname || demo.lastname === '') {
    setError(true);
    return false;
  }
  if (!demo.phone || demo.phone === '') {
    setError(true);
    return false;
  }
  if (!demo.country || demo.country === '') {
    setError(true);
    return false;
  }
  if (!demo.countryCode || demo.countryCode === '') {
    setError(true);
    return false;
  }
  if (!demo.companyname || demo.companyname === '') {
    setError(true);
    return false;
  }
  if (!demo.teamsize || demo.teamsize === '') {
    setError(true);
    return false;
  }
  if (!demo.jobtitle || demo.jobtitle === '') {
    setError(true);
    return false;
  }
  return true;
};
