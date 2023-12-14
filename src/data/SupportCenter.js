import React from 'react';
import GridIcon from '../assets/support-center-icons/grid-icon.svg';
import UserCogIcon from '../assets/support-center-icons/user-cog-icon.svg';
import MeterIcon from '../assets/support-center-icons/meter-icon.svg';
import FAQIcon from '../assets/support-center-icons/stop-faq-icon.svg';
import RecorderIcon from '../assets/support-center-icons/recorder-icon.svg';
import DataIcon from '../assets/support-center-icons/data-icon.svg';
import LinesIcon from '../assets/support-center-icons/lines-icon.svg';
import SensorsIcon from '../assets/support-center-icons/sensors-icon.svg';
import IntegrationsIcon from '../assets/support-center-icons/integrations-icon.svg';
import HeadsetIcon from '../assets/support-center-icons/headset-icon.svg';
import ConnectIcon from '../assets/support-center-icons/connect-icon.svg';
import WandIcon from '../assets/support-center-icons/wand-icon.svg';
import ArrowsIcon from '../assets/support-center-icons/arrows-icon.svg';
import SearchIcon from '../assets/support-center-icons/search-icon.svg';
import CommandIcon from '../assets/support-center-icons/command-icon.svg';

export const supportCenterHero = {
  heading: 'Hi. How can we help?',
  subhead: `
  <p>
    Common troubleshooting tips: <a href="https://help.onupkeep.com/en/?q=notifications">notifications</a>
    <span>, </span>
    <a href="https://help.onupkeep.com/en/?q=data-security">data security</a>
    <span>, </span>
    <a href="https://help.onupkeep.com/en/?q=password-reset">password reset</a>
  </p>
  `,
};

export const supportCenterCardDecks = [
  {
    heading: 'Help Center Categories',
    headingIcon: <img loading="lazy" src={GridIcon} alt="Grid Icon" />,
    theme: 'white',
    cards: [
      {
        url:
          'https://help.onupkeep.com/en/collections/3686253-getting-upkeep-off-the-ground-and-your-team-trained',
        icon: {
          color: 'Blue',
          logo: <img loading="lazy" src={UserCogIcon} alt="User Cog Icon" />,
        },
        title: 'New to UpKeep?',
        description:
          'Start here! For new users, get started here with training resources and important information to be set up for long term success!',
      },
      {
        url:
          'https://help.onupkeep.com/en/collections/2637910-reporting-dashboards',
        icon: {
          color: 'Purple',
          logo: <img loading="lazy" src={MeterIcon} alt="Meter Icon" />,
        },
        title: 'Reporting & Dashboards',
        description:
          'View analytics and run reports on the work you and your team have completed!',
      },
      {
        url:
          'https://help.onupkeep.com/en/collections/166953-faqs-and-troubleshooting',
        icon: {
          color: 'Green',
          logo: <img loading="lazy" src={FAQIcon} alt="FAQ Icon" />,
        },
        title: 'FAQs and Troubleshooting',
        description:
          'Common questions about UpKeep Maintenance Management, and Edge tracking sensors.',
      },
      {
        url: 'https://help.onupkeep.com/en/?q=videos',
        icon: {
          color: 'Red',
          logo: <img loading="lazy" src={RecorderIcon} alt="Recorder Icon" />,
        },
        title: 'Video Tutorials & Webinars',
        description:
          'Don’t like to read? Check out our video tutorials, webinars and quick overview videos on using UpKeep!',
      },
      {
        url:
          'https://help.onupkeep.com/en/articles/4753149-importing-your-data',
        icon: {
          color: 'Yellow',
          logo: <img loading="lazy" src={DataIcon} alt="Data Icon" />,
        },
        title: 'Data Import',
        description:
          'Learn to import your existing data from your old database or systems into UpKeep!',
      },
      {
        url:
          'https://help.onupkeep.com/en/collections/166953-upkeep-faqs-and-support-troubleshooting-tips',
        icon: {
          color: 'Pink',
          logo: <img loading="lazy" src={LinesIcon} alt="Lines Icon" />,
        },
        title: 'General How To’s',
        description:
          'Common How To’s and Tutorials within the UpKeep Maintenance Management app.',
      },
      {
        url: 'https://help.onupkeep.com/en/collections/2690844-sensors',
        icon: {
          color: 'Orange',
          logo: <img loading="lazy" src={SensorsIcon} alt="Sensors Icon" />,
        },
        title: 'Sensors',
        description: 'Find more information on sensors and UpKeep Edge.',
      },
      {
        url:
          'https://help.onupkeep.com/en/collections/166880-integrations-500-web-integrations',
        icon: {
          color: 'Teal',
          logo: (
            <img
              loading="lazy"
              src={IntegrationsIcon}
              alt="Integrations Icon"
            />
          ),
        },
        title: 'Integrations',
        description: 'Learn about integrations and our API.',
      },
      {
        url: 'https://www.onupkeep.com/support/contact-us/',
        icon: {
          color: 'Green',
          logo: <img loading="lazy" src={HeadsetIcon} alt="Headset Icon" />,
        },
        title: 'Contact Support',
        description: 'Get in touch with our team.',
      },
    ],
  },
  {
    heading: 'Popular Articles',
    headingIcon: <img loading="lazy" src={ConnectIcon} alt="Connect Icon" />,
    links: [
      {
        label: '<li>How do I <span>upgrade my subscription?</span>',
        url:
          'https://help.onupkeep.com/en/articles/397918-how-do-i-cancel-upgrade-or-downgrade-my-subscription',
      },
      {
        label: '<li>How do I <span>change my password?</span></li>',
        url:
          'https://help.onupkeep.com/en/articles/2966129-how-to-change-your-password',
      },
      {
        label: '<li><span>How long</span> is my data stored?</li>',
        url:
          'https://help.onupkeep.com/en/articles/255068-will-my-data-be-erased-how-long-is-data-stored',
      },
      {
        label: '<li>How do I <span>disable notifications?</span></li>',
        url:
          'https://help.onupkeep.com/en/articles/1032763-how-do-i-disable-the-mobile-app-and-email-notifications',
      },
      {
        label: '<li>Does UpKeep have a <span>mobile application?</span></li>',
        url:
          'https://help.onupkeep.com/en/articles/775426-does-upkeep-have-a-mobile-application',
      },
      {
        label: '<li>How do I view all of my <span>work orders?</span></li>',
        url: '',
      },
    ],
  },
  {
    heading: 'UpKeep Tips',
    headingIcon: <img loading="lazy" src={WandIcon} alt="Wand Icon" />,
    theme: 'transparent',
    cards: [
      {
        icon: {
          logo: <img loading="lazy" src={ArrowsIcon} alt="User Cog Icon" />,
        },
        description:
          'How to<span> create and manage preventive maintenance PM triggers?</span>',
        url:
          'https://help.onupkeep.com/en/articles/4731570-how-to-create-and-manage-preventive-maintenance-pm-triggers',
      },
      {
        icon: {
          logo: <img loading="lazy" src={SearchIcon} alt="User Cog Icon" />,
        },
        description: 'How to<span> add, edit, or remove people teams?</span>',
        url:
          'https://help.onupkeep.com/en/articles/1746935-how-to-add-edit-or-remove-people-teams',
      },
      {
        icon: {
          logo: <img loading="lazy" src={CommandIcon} alt="User Cog Icon" />,
        },
        description: 'How to<span> create qr codes?</span>',
        url:
          'https://help.onupkeep.com/en/articles/2589850-how-to-create-qr-codes',
      },
    ],
  },
];
