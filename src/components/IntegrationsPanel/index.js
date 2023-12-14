import React from 'react';

import IntegrationsPanelGrid from './IntegrationsPanel-Grid';
import IntegrationsPanelFloating from './IntegrationsPanel-Floating';

const IntegrationsPanel = ({ component }) => {
  switch (component.variant) {
    case 'grid':
      return <IntegrationsPanelGrid {...component} />;
    case 'floating':
      return <IntegrationsPanelFloating {...component} />;
    default:
      return null;
  }
};

export default IntegrationsPanel;
