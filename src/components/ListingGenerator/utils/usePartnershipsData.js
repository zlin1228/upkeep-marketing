import { useStaticQuery, graphql } from 'gatsby';

const usePartnershipsData = () => {
  const { allDatoCmsPartnership } = useStaticQuery(
    graphql`
      query PartnershipsListing {
        allDatoCmsPartnership {
          edges {
            node {
              ...datoCmsPartnership
            }
          }
        }
      }
    `
  );
  return {
    partnerships: allDatoCmsPartnership.edges,
  };
};

export default usePartnershipsData;
