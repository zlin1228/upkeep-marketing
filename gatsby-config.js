const { languages, defaultLanguage } = require('./languages');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://www.upkeep.com';

module.exports = {
  siteMetadata: {
    title: `CMMS, EAM & IIoT Software by UpKeep Asset Operations Management | Try Free`,
    description: `UpKeep Asset Operations Management Platform is a mobile first CMMS, EAM & IIoT suite of solutions proven to streamline the work order process and take you from reactive to preventive maintenance.`,
    author: `UpKeep`,
    twitter: '@OnUpKeep',
    facebook: 'onupkeep',
    siteUrl,
    siteLanguage: 'en',
    ogLanguage: 'en_US',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anti-flicker',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.upkeep.com',
        sitemap: 'https://www.upkeep.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: false,
        environment: `main`,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TJL6ZVR',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-4XCTC3D1W0'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: '/404/',
            languages: ['en'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'UpKeep CMMS Software',
        short_name: 'UpKeep',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#FF3B30',
        display: 'minimal-ui',
        icon: `src/images/upkeep-icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn:
          'https://9d9704a6b602454194fbb3059b124f38@o517341.ingest.sentry.io/5625012',
        sampleRate: 0.7,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
      }`,
        resolvePages: ({ allSitePage }) => {
          const pages = allSitePage.nodes.map(node => node);
          return pages;
        },
        serialize: (page, { resolvePagePath }) => {
          const path = resolvePagePath(page);
          const url = siteUrl + path;

          return {
            url,
            changefreq: 'daily',
            priority: 0.7,
            links: [
              { lang: 'en', url: siteUrl + path },
              { lang: 'es', url: `${siteUrl}/es${path}` },
              { lang: 'x-default', url: siteUrl + path },
            ],
          };
        },
      },
    },
  ],
};
