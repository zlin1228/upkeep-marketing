import { useEffect, useState } from 'react';
import axios from 'axios';
import { captureException } from '@sentry/gatsby';
import filterCareers from './filterCareers';

const useCareers = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const getCareers = async () => {
      try {
        const { data } = await axios.get(
          'https://api.lever.co/v0/postings/onupkeep'
        );
        setCareers(filterCareers(data));
      } catch (error) {
        captureException(`UpKeep Careers Error - ${error}`);
      }
    };
    getCareers();
  }, []);

  return { careers };
};

export default useCareers;
