import { useState, useEffect } from 'react';

const useFormatter = markup => {
  const [text, setText] = useState('');

  useEffect(() => {
    const regex = new RegExp(window.location.origin, 'g');
    setText(markup?.content[0]?.content?.replace(regex, ''));
  }, []);

  return { text };
};

export default useFormatter;
