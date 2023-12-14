import { useStaticQuery, graphql } from 'gatsby';

export const useDownloadsData = () => {
  const { allDatoCmsDownload } = useStaticQuery(
    graphql`
      query DownloadsListingComponent {
        allDatoCmsDownload(sort: { meta: { createdAt: DESC } }) {
          edges {
            node {
              id
              internalName
              slug
              downloadsType {
                id
                name
              }
              category {
                id
                name
                slug
              }
              author {
                ...datoCmsPerson
              }
              thumbnailImage {
                ...datoCmsFileField
              }
              title
              description
            }
          }
        }
      }
    `
  );
  return { allDatoCmsDownload };
};
