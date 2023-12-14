import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '../../../molecules/Icon';

import { color } from '../../../atoms/colors';

const PublishDate = ({ publishDate }) => {
  const { t } = useTranslation();
  if (!publishDate) return null;

  return (
    <div className="publish_date">
      <Icon
        id="fa-regular fa-calendar"
        fillColor={color.primary[700]}
        width="12px"
        height="12px"
      />
      {t('Published on')} {publishDate}
    </div>
  );
};

export default PublishDate;
