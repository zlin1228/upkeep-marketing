import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import SocialShare from '../../../molecules/SocialShare';
import SubscriptionCard from '../../Cards/SubscriptionCard';

import {
  Container,
  StatsCard,
  StatsHeading,
  StatsText,
  StatWrapper,
} from '../styles/Sidebar.styled';

const Sidebar = ({ company, industry }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <SocialShare heading={`${t('Share this article')}:`} />
      <StatsCard>
        {company?.name && (
          <StatWrapper>
            <StatsHeading>{t('Company')}</StatsHeading>
            <StatsText>{company?.name}</StatsText>
          </StatWrapper>
        )}
        {company?.location && (
          <StatWrapper>
            <StatsHeading>{t('Location')}</StatsHeading>
            <StatsText>{company?.location}</StatsText>
          </StatWrapper>
        )}
        {industry?.name && (
          <StatWrapper>
            <StatsHeading>{t('Industry')}</StatsHeading>
            <StatsText>{industry?.name}</StatsText>
          </StatWrapper>
        )}
        {company?.employees && (
          <StatWrapper>
            <StatsHeading>{t('Employees')}</StatsHeading>
            <StatsText>{company?.emplyees}</StatsText>
          </StatWrapper>
        )}
        {company?.maintenanceTeamSize && (
          <StatWrapper>
            <StatsHeading>{t('Maintenance Team Size')}</StatsHeading>
            <StatsText>{company?.maintenanceTeamSize}</StatsText>
          </StatWrapper>
        )}
      </StatsCard>
      <SubscriptionCard />
    </Container>
  );
};
export default Sidebar;
