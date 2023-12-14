import React from 'react';

import Hero404Page from './Hero404Page';
import HeroAboutPage from './HeroAboutPage';
import HeroBlogPage from './HeroBlogPage';
import HeroBookPage from './HeroBookPage';
import HeroChecklistGenerator from './HeroChecklistGenerator';
import HeroDemoPage from './HeroDemoPage';
import HeroDownloadsPage from './HeroDownloadsPage';
import HeroEventsListingPage from './HeroEventsListingPage';
import HeroExtended from './HeroExtended';
import HeroFreeTrialPage from './HeroFreeTrialPage';
import Hero from './Hero';
import HeroHomePage from './HeroHomePage';
import HeroLearningCenterPage from './HeroLearningCenterPage';
import HeroMaintenanceCalculatorsPage from './HeroMaintenanceCalculatorsPage';
import HeroOpenAISearch from './HeroOpenAISearch';
import HeroPartnershipsListing from './HeroPartnershipsListing';
import HeroPodcastsListing from './HeroPodcastsListing';
import HeroPressReleases from './HeroPressReleases';
import HeroResourceHub from './HeroResourceHub';
import HeroReviewsListingPage from './HeroReviewsListingPage';
import HeroSimple from './HeroSimple';
import HeroSupportPage from './HeroSupportPage';
import HeroTemplatesPage from './HeroTemplatesPage';
import HeroUpKeepPledge from './HeroUpKeepPledge';
import HeroDemoCmmsRadio from './HeroDemoCmmsRadio';

const HeroComponent = ({
  component,
  pageMeta,
  showAnnouncementBar,
  location,
}) => {
  switch (component?.variant) {
    case 'extended':
      return (
        <HeroExtended
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'book-page':
      return (
        <HeroBookPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'about-page':
      return (
        <HeroAboutPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'blog-listing':
      return (
        <HeroBlogPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'resource-library':
      return (
        <HeroResourceHub
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'events-listing':
      return (
        <HeroEventsListingPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'learning-listing':
      return (
        <HeroLearningCenterPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
          location={location}
        />
      );
    case 'support-page':
      return (
        <HeroSupportPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'downloads-listing':
      return (
        <HeroDownloadsPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'checklist-listing':
      return (
        <HeroTemplatesPage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'maintenance-calculators':
      return (
        <HeroMaintenanceCalculatorsPage
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
          component={component}
        />
      );
    case 'podcast-listing':
      return <HeroPodcastsListing pageMeta={pageMeta} component={component} />;
    case '404-page':
      return <Hero404Page component={component} pageMeta={pageMeta} />;
    case 'home-page':
      return (
        <HeroHomePage
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'simple':
      return (
        <HeroSimple
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'partnerships-listing':
      return (
        <HeroPartnershipsListing
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
        />
      );
    case 'demo-page':
      return <HeroDemoPage component={component} location={location} />;
    case 'free-trial-page':
      return <HeroFreeTrialPage component={component} location={location} />;
    case 'reviews-listing':
      return (
        <HeroReviewsListingPage component={component} pageMeta={pageMeta} />
      );
    case 'press-listing':
      return <HeroPressReleases component={component} pageMeta={pageMeta} />;
    case 'openai-search':
      return <HeroOpenAISearch component={component} />;
    case 'openai-checklist-generator':
      return <HeroChecklistGenerator component={component} />;
    case 'upkeep-pledge':
      return <HeroUpKeepPledge component={component} pageMeta={pageMeta} />;
    case 'demo-cmms-radio':
      return <HeroDemoCmmsRadio component={component} location={location} />;
    default:
      return (
        <Hero
          component={component}
          pageMeta={pageMeta}
          showAnnouncementBar={showAnnouncementBar}
          location={location}
        />
      );
  }
};

export default HeroComponent;
