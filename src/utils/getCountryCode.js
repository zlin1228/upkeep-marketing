import axios from 'axios';

const getCountryCode = async setCountryCode => {
  const res = await axios.get('https://geolocation-db.com/json/');
  setCountryCode(res.data.country_code.toLowerCase());
};

export default getCountryCode;
