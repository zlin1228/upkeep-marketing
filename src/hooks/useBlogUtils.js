import { useEffect, useState } from 'react';
import {
  generateAlertCard,
  generateVideoContent,
} from '../utils/richTextUtils';
import { getPardotInRichText } from '../utils/getPardotForm';
import setLazyLoading from '../utils/setLazyLoading';
import calculateReadTime from '../utils/calculateReadTime';

const useBlogUtils = (data, setLoading) => {
  const [post, setPost] = useState('');
  const [form, setForm] = useState('');
  const [readingTime, setReadingTime] = useState('');

  useEffect(() => {
    setLoading(true);
    if (data) {
      const lazyloading = setLazyLoading(data);
      const alertCard = generateAlertCard(lazyloading);
      const { props } = generateVideoContent(alertCard);
      const markup = props?.dangerouslySetInnerHTML?.__html;
      setPost(markup);
      setForm(getPardotInRichText(markup)?.[1]);
      setReadingTime(calculateReadTime(markup));
      setLoading(false);
    }
  }, []);

  return { post, form, readingTime };
};

export default useBlogUtils;
