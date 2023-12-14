import { useStaticQuery, graphql } from 'gatsby';
import { toolsData } from '../data';
import {
  formatBlogPosts,
  formatLearningPosts,
  formatDownloadsPosts,
  formatPodcastsPosts,
  formatTemplatePosts,
  formatEventsPosts,
} from './formatters';

const useResourceHubData = type => {
  const {
    blog,
    learning,
    downloads,
    podcasts,
    templates,
    events,
  } = useStaticQuery(ResourceHubQuery);
  switch (type) {
    case 'blog':
      return {
        id: 'blog',
        name: 'Blog',
        theme: 'light',
        layoutType: 'grid',
        layout: '2x3',
        posts: formatBlogPosts(blog.edges),
        callToAction: {
          label: 'View all Blogs',
          url: '/resources/blog',
        },
        totalCount: blog.totalCount,
      };
    case 'learning':
      return {
        id: 'learning',
        name: 'Learning Center',
        theme: 'gray',
        layoutType: 'grid',
        layout: '3x3',
        posts: formatLearningPosts(learning.edges),
        callToAction: {
          label: 'View all Articles',
          url: '/learning',
        },
        totalCount: learning.totalCount,
      };
    case 'downloads':
      return {
        id: 'downloads',
        name: 'Downloads',
        theme: 'light',
        layoutType: 'grid',
        layout: '1x3',
        posts: formatDownloadsPosts(downloads.edges),
        callToAction: {
          label: 'View all Downloads',
          url: '/resources/downloads',
        },
        totalCount: downloads.totalCount,
      };
    case 'podcasts':
      return {
        id: 'podcasts',
        name: 'Podcasts',
        theme: 'gray',
        layoutType: 'slider',
        posts: formatPodcastsPosts(podcasts.edges),
        callToAction: {
          label: 'View all Podcasts',
          url: '/resources/podcasts',
        },
        totalCount: podcasts.totalCount,
      };
    case 'templates':
      return {
        id: 'templates',
        name: 'Templates',
        theme: 'light',
        layoutType: 'grid',
        layout: '2x3',
        posts: formatTemplatePosts(templates.edges),
        callToAction: {
          label: 'View all Templates',
          url: '/resources/templates',
        },
        totalCount: templates.totalCount,
      };
    case 'tools':
      return {
        id: 'tools',
        name: 'Tools',
        theme: 'gray',
        layoutType: 'slider',
        posts: toolsData,
        totalCount: toolsData.length,
      };
    case 'events':
      return {
        id: 'events',
        name: 'Events',
        theme: 'light',
        layoutType: 'grid',
        layout: '1x3',
        posts: formatEventsPosts(events.edges),
        callToAction: {
          label: 'View all Events',
          url: '/resources/events',
        },
        totalCount: events.totalCount,
      };
    default:
      return null;
  }
};

export default useResourceHubData;

const ResourceHubQuery = graphql`
  query ResourceHubQuery {
    blog: allDatoCmsBlogPost(limit: 5, sort: { meta: { createdAt: DESC } }) {
      totalCount
      edges {
        node {
          id
          slug
          heading: internalName
          category {
            slug
            internalName
            color
          }
          metaTags {
            subhead: description
            image {
              ...datoCmsAsset
            }
          }
          meta {
            publishedAt(formatString: "MMMM DD, YYYY")
          }
          author {
            ...datoCmsPerson
          }
        }
      }
    }
    learning: allDatoCmsLearningPost(
      sort: { meta: { publishedAt: DESC } }
      limit: 6
    ) {
      totalCount
      edges {
        node {
          id
          heading: internalName
          metaTags {
            title
            subhead: description
          }
          slug
          categories {
            id
            categoryType
            name
            safeName
          }
        }
      }
    }
    downloads: allDatoCmsDownload(
      sort: { meta: { createdAt: DESC } }
      limit: 4
    ) {
      totalCount
      edges {
        node {
          id
          slug
          heading: title
          subhead: description
          downloadsType {
            id
            name
          }
          category {
            name
          }
          author {
            ...datoCmsPerson
          }
          thumbnailImage {
            ...datoCmsFileField
          }
        }
      }
    }
    podcasts: allDatoCmsPodcast(sort: { publishDate: DESC }, limit: 10) {
      totalCount
      edges {
        node {
          id
          slug
          metaTags {
            image {
              ...datoCmsAsset
            }
          }
          heading
          subhead
          categories {
            name
            slug
            order
            id
          }
          authorS {
            ...datoCmsPerson
          }
        }
      }
    }
    templates: allDatoCmsTemplateCollection(
      limit: 5
      sort: { meta: { publishedAt: DESC } }
    ) {
      edges {
        node {
          id
          internalName
          slug
          heading
          subhead
          metaTags {
            title
            description
            image {
              ...datoCmsAsset
            }
          }
          category {
            name
            slug
          }
          thumbnail {
            ...datoCmsWebsiteImage
          }
        }
      }
      totalCount
    }
    events: allDatoCmsEventPost(sort: { meta: { updatedAt: DESC } }, limit: 4) {
      totalCount
      edges {
        node {
          id
          internalName
          slug
          eventStatus
          eventRegistration {
            ... on DatoCmsCallToAction {
              id
              internal {
                type
              }
              url
            }
            ... on DatoCmsWebsiteForm {
              id
              internal {
                type
              }
            }
          }
          heading: title
          subhead: description
          startDate(formatString: "LL")
          category {
            internalName
            slug
          }
          thumbnailImage {
            ...datoCmsWebsiteImage
          }
          authors {
            ...datoCmsPerson
          }
        }
      }
    }
  }
`;
