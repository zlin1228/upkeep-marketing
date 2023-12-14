import axios from 'axios';
import { captureException } from '@sentry/gatsby';

export default (payload, setData, setNetworkError, setLoading) => {
  axios
    .post('https://api.onupkeep.com/auth/signup', payload, {
      withCredentials: true,
    })
    .then(res => {
      if (typeof document !== `undefined`) {
        document.location.href = `https://app.onupkeep.com/#/login/setup-new?token=${res.data.sessionToken}`;
      } else {
        captureException(
          'Free trial page error - Succesful signup, but redirect to app failed. Document is undefined.'
        );
      }
      setData({
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
        companyname: '',
        jobtitle: '',
        teamsize: '',
        password: '',
        countryCode: '',
        country: '',
      });
      setNetworkError('');
    })
    .catch(err => {
      setLoading(false);
      setNetworkError('An account with that email already exists.');
      captureException(`Free trial page error - ${err}`);
      console.log(err.response);
    });
};
