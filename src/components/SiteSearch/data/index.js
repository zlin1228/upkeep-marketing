import { color } from '../../../atoms/colors';

export const exploreLinksData = [
  {
    id: 0,
    items: [
      {
        id: 0,
        name: 'Products',
        icon: 'chart-breakout-square',
        iconColor: color.steel[700],
        links: [
          {
            id: 0,
            name: 'Maintenance Management',
            url: '/product/CMMS-software',
          },
          {
            id: 1,
            name: 'Enterprise Asset Management',
            url: '/product/enterprise-asset-management',
          },
          {
            id: 2,
            name: 'Edge',
            url: '/product/edge',
          },
        ],
      },
      {
        id: 1,
        name: 'Role',
        icon: 'user-square',
        iconColor: color.steel[700],
        links: [
          {
            id: 0,
            name: 'Maintenance',
            url: '/solutions/maintenance-teams',
          },
          {
            id: 1,
            name: 'Operations',
            url: '/solutions/operations-teams',
          },
          {
            id: 2,
            name: 'Reliability',
            url: '/solutions/reliability-teams',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    items: [
      {
        id: 0,
        name: 'Resources',
        icon: 'settings-02',
        iconColor: color.steel[700],
        links: [
          {
            id: 0,
            name: 'Checklist Generator',
            url: '/checklist-generator',
          },
          {
            id: 1,
            name: 'Learning Center',
            url: '/learning',
          },
          {
            id: 2,
            name: 'Blog',
            url: '/resources/blog',
          },
        ],
      },
      {
        id: 1,
        name: 'Company',
        icon: 'upkeep-logo',
        iconColor: color.primary[500],
        links: [
          {
            id: 0,
            name: 'Pricing',
            url: '/pricing',
          },
          {
            id: 1,
            name: 'Reviews',
            url: '/product/reviews',
          },
          {
            id: 2,
            name: 'Customer Stories',
            url: '/product/customers',
          },
        ],
      },
    ],
  },
];
