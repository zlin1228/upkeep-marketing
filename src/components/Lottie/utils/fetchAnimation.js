import axios from 'axios';

export default async (url, setAnimation) => {
  const { data } = await axios.get(url);
  setAnimation(data);
};
