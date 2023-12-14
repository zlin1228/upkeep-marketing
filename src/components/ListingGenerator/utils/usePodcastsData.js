import { useStaticQuery, graphql } from 'gatsby';

const sortPodcasts = (type, podcasts) => {
  if (type === 'life-at-upkeep') {
    return podcasts.filter(
      ({ node }) => node?.categories?.slug === 'life-at-upkeep'
    );
  }
  return podcasts.filter(
    ({ node }) => node?.categories?.slug !== 'life-at-upkeep'
  );
};

const usePodcastsData = type => {
  const { allDatoCmsPodcast } = useStaticQuery(PodcastListingQuery);
  return sortPodcasts(type, allDatoCmsPodcast.edges);
};

export default usePodcastsData;

const PodcastListingQuery = graphql`
  query PodcastsListingQuery {
    allDatoCmsPodcast(sort: { publishDate: DESC }) {
      edges {
        node {
          id
          internalName
          slug
          metaTags {
            title
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
            id
          }
          authorS {
            ...datoCmsPerson
          }
        }
      }
    }
  }
`;
