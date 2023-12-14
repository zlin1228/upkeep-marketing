import React from 'react';
import styled from 'styled-components';

import BookContestForm from './BookContestForm';
import DatahubForm from './DatahubForm';
import DemoForm from './DemoForm';
import DownloadTemplateForm from './DownloadTemplateForm';
import EdgeForm from './EdgeForm';
import EventsForm from './EventsForm';
import PartnersSignupForm from './PartnersSignupForm';
import RequestPricingForm from './RequestPricingForm';
import StarterSubscriptionForm from './StarterSubscriptionForm';
import TshirtGiveawayForm from './TshirtGiveawayForm';
import TrialForm from './FreeTrialForm';

import { color } from '../../atoms/colors';
import { shadow } from '../../atoms/shadows';

const FORM_COMPONENTS = {
  book: BookContestForm,
  'datahub-form': DatahubForm,
  demo: DemoForm,
  download: DownloadTemplateForm,
  'edge-pricing': EdgeForm,
  event: EventsForm,
  livestorm: EventsForm,
  partners: PartnersSignupForm,
  pricing: RequestPricingForm,
  subscription: StarterSubscriptionForm,
  'tshirt-giveaway': TshirtGiveawayForm,
  trial: TrialForm,
};

const FormGenerator = ({
  componentProps,
  location,
  theme,
  purchasePlan,
  setShowFormModal,
}) => {
  const Component = FORM_COMPONENTS[componentProps?.variant];

  if (!Component) return null;

  if (componentProps?.variant === 'event') {
    return (
      <Container>
        <Component component={{ eventRegistration: componentProps }} />
      </Container>
    );
  }

  return (
    <Component
      component={componentProps}
      location={location}
      purchasePlan={purchasePlan}
      theme={theme}
      setShowFormModal={setShowFormModal}
    />
  );
};

export default FormGenerator;

const Container = styled.div`
  width: 100%;
  background-color: ${color.common.white};
  ${shadow('xl', 'dark')};
  padding: 32px;
  border-radius: 12px;
`;
