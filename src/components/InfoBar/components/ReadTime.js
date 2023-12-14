import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '../../../molecules/Icon';

import { color } from '../../../atoms/colors';

const ReadTime = ({ readTime }) => {
  const { t } = useTranslation();
  if (!readTime) return null;

  return (
    <div className="read_time">
      <Icon
        id="fa-regular fa-clock"
        fillColor={color.primary[700]}
        width="12px"
        height="12px"
      />
      {t('Duration')}: {readTime}
    </div>
  );
};

export default ReadTime;
