import axios from 'axios';
import { captureException } from '@sentry/gatsby';

export default (payload, setData, setNetworkError, setLoading, params) => {
  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  axios
    .post(`https://api.onupkeep.com/auth/signup`, payload, {
      withCredentials: true,
    })
    .then(res => {
      if (typeof document !== `undefined`) {
        document.location.href = `https://app.onupkeep.com/web/subscription/checkout/starter?${queryString}`;
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
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      setNetworkError('An account with that email already exists.');
      captureException(`Free trial page error - ${err}`);
      console.log(err.response);
    });
};
