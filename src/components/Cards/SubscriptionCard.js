import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Subscription from '../Forms/Subscription';

import { Card, Text } from '../../styles/Components/Cards/SubscriptionCard';

const SubscriptionCard = () => {
  const { t } = useTranslation();

  return (
    <Card className="subscription-card">
      <Text>
        <p className="heading">
          {t('Get the best maintenance advice, straight to your inbox.')}
        </p>
        <p className="subhead">{t('Sign up for newsletter updates')}</p>
      </Text>
      <Subscription />
    </Card>
  );
};

export default SubscriptionCard;
