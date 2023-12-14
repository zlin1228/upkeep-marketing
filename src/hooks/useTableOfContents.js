import { useState, useEffect } from 'react';

const useTableOfContents = content => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    setHeadings(
      content
        ?.map(item => {
          if (item?.type === 'heading' && item?.level <= 2) {
            return { label: item?.children[0]?.value };
          }
        })
        ?.filter(item => item !== undefined)
    );
  }, [content]);

  return { headings };
};

export default useTableOfContents;
