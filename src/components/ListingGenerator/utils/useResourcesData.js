import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tools from '../../ResourceLibrary/data/defaultResources';

const useResources = () => {
  const data = useStaticQuery(ResourcesQuery);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources([
      [
        { type: 'blog' },
        {
          blog: data?.articles?.edges,
          totalCount: data?.articles?.totalCount,
        },
      ],
      [
        { type: 'learning' },
        {
          learning: data?.learning?.edges,
          totalCount: data?.learning?.totalCount,
        },
      ],
      [
        { type: 'downloads' },
        {
          downloads: data?.downloads?.edges,
          totalCount: data?.downloads?.totalCount,
        },
      ],
      [
        { type: 'events' },
        {
          events: data?.events?.edges,
          totalCount: data?.events?.totalCount,
        },
      ],
      [
        { type: 'podcasts' },
        {
          podcasts: data?.podcasts?.edges,
          totalCount: data?.podcasts?.totalCount,
        },
      ],
      [
        { type: 'templates' },
        {
          templates: data?.templates?.edges,
          totalCount: data?.templates?.totalCount,
        },
      ],
      [{ type: 'tools' }, { tools: Tools, totalCount: 3 }],
    ]);
  }, []);

  return resources;
};

export default useResources;

const ResourcesQuery = graphql`
  query ResourcesListingQuery {
    articles: allDatoCmsBlogPost(
      sort: { meta: { createdAt: DESC } }
      limit: 15
    ) {
      totalCount
      edges {
        node {
          id
          slug
          heading: internalName
          author {
            ...datoCmsPerson
          }
          metaTags {
            subhead: description
            image {
              ...datoCmsAsset
            }
          }
        }
      }
    }
    learning: allDatoCmsLearningPost(
      sort: { meta: { publishedAt: DESC } }
      limit: 15
    ) {
      totalCount
      edges {
        node {
          id
          slug
          heading: internalName
          metaTags {
            subhead: description
          }
        }
      }
    }
    templates: allDatoCmsTemplateCollection(limit: 15) {
      totalCount
      edges {
        node {
          id
          slug
          heading
          subhead
          thumbnail {
            ...datoCmsWebsiteImage
          }
        }
      }
    }
    events: allDatoCmsEventPost(limit: 15) {
      totalCount
      edges {
        node {
          id
          slug
          heading: title
          subhead: description
          thumbnailImage {
            ...datoCmsWebsiteImage
          }
          authors {
            ...datoCmsPerson
          }
        }
      }
    }
    downloads: allDatoCmsDownload(
      sort: { meta: { createdAt: DESC } }
      limit: 15
    ) {
      totalCount
      edges {
        node {
          id
          slug
          heading: title
          subhead: description
          thumbnailImage {
            ...datoCmsFileField
          }
        }
      }
    }
    podcasts: allDatoCmsPodcast(sort: { publishDate: DESC }, limit: 15) {
      totalCount
      edges {
        node {
          id
          slug
          metaTags {
            description
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
          }
          authorS {
            ...datoCmsPerson
          }
          podcastVideo {
            websiteVideo {
              ...datoCmsWebsiteVideo
            }
          }
        }
      }
    }
  }
`;
