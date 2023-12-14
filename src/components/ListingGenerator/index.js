import React from 'react';

import Blog from './components/Blog';
import CodeGenerator from './components/CodeGenerator';
import Customers from './components/Customers';
import Downloads from './components/Downloads';
import Events from './components/Events';
import Integrations from './components/Integrations';
import LearningCenter from './components/LearningCenter';
import MaintenanceCalculators from './components/MaintenanceCalculators';
import Partnerships from './components/Partnerships';
import Podcasts from './components/Podcasts';
import PressReleases from './components/PressReleases';
import ResourceHub from './components/ResourceHub';
import Reviews from './components/Reviews';
import RoiCalculator from './components/RoiCalculator';
import SupportCenter from './components/SupportCenter';
import Templates from './components/Templates';

const ListingGenerator = ({ component, postTypes, showAnnouncementBar }) => {
  const type = component?.listingType;
  const data = postTypes?.[type];

  switch (type) {
    case 'reviews':
      return <Reviews />;
    case 'customers':
      return <Customers data={data} />;
    case 'integrations':
      return <Integrations data={data} />;
    case 'blog':
      return <Blog data={data} showAnnouncementBar={showAnnouncementBar} />;
    case 'partnerships':
      return <Partnerships />;
    case 'events':
      return <Events data={data} />;
    case 'press':
      return <PressReleases />;
    case 'learning':
      return <LearningCenter data={data} />;
    case 'resources':
      return <ResourceHub />;
    case 'support':
      return <SupportCenter />;
    case 'downloads':
      return <Downloads />;
    case 'checklists':
      return <Templates />;
    case 'maintenance-calculators':
      return <MaintenanceCalculators />;
    case 'code-generator':
      return <CodeGenerator />;
    case 'roi-calculator':
      return <RoiCalculator />;
    case 'podcasts':
      return <Podcasts type="podcasts" />;
    case 'life-at-upkeep':
      return <Podcasts type="life-at-upkeep" />;
    default:
      return null;
  }
};

export default ListingGenerator;
