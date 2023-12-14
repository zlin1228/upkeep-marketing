import React from 'react';

import Icon from '../../../molecules/Icon';

import { color } from '../../../atoms/colors';

const Author = ({ author }) => {
  if (!author) return null;

  return (
    <div className="author">
      <Icon
        id="fa-regular fa-user"
        fillColor={color.primary[700]}
        width="15px"
        height="15px"
      />
      {author}
    </div>
  );
};

export default Author;
