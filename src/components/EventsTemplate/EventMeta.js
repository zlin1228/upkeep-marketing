import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Container, Item } from './styles/EventMeta.styled';

const EventMeta = ({ component }) => {
  const { t } = useTranslation();

  return (
    <Container>
      {component?.startDate && (
        <Item>
          <p>{t('Start Date')}</p>
          <h6>
            {component?.startDate}{' '}
            {component?.scheduleTime && `at ${component?.scheduleTime}`}
          </h6>
        </Item>
      )}
      {component?.endDate && (
        <Item>
          <p>{t('End Date')}</p>
          <h6>{component?.endDate}</h6>
        </Item>
      )}
      {component?.location && (
        <Item>
          <p>{t('Location')}</p>
          <h6>{component?.location}</h6>
        </Item>
      )}
      {component?.duration && (
        <Item>
          <p>{t('Duration')}</p>
          <h6>{component?.duration}</h6>
        </Item>
      )}
    </Container>
  );
};

export default EventMeta;
