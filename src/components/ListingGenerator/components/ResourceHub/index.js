import React from 'react';
import Header from './components/Header';
import Resource from './components/Resource';
import { resourcesData } from './data';

const ResourceHubListing = () => (
  <>
    <Header />
    {resourcesData.map(resource => (
      <Resource key={resource} type={resource} />
    ))}
  </>
);

export default ResourceHubListing;
