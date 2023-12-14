import axios from 'axios';
import { captureException } from '@sentry/gatsby';

export default (payload, setData, setNetworkError, setLoading) => {
  axios
    .post('https://api.onupkeep.com/auth/signup/partners', payload, {
      withCredentials: true,
    })
    .then(res => {
      const token = res?.data?.sessionToken;
      if (typeof document !== `undefined`) {
        document.location.href = `https://app.onupkeep.com/#/login/setup-new?token=${token}`;
      } else {
        captureException(
          'Free trial page error - Succesful signup, but redirect to app failed. Document is undefined.'
        );
      }
      setData({
        email: '',
        password: '',
      });
      setNetworkError('');
    })
    .catch(err => {
      setLoading(false);
      setNetworkError('An account with that email already exists.');
      captureException(`Partner Signup Form Error - ${err}`);
      console.log(err.response);
    });
};
