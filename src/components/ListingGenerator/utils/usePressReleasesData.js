import { useStaticQuery, graphql } from 'gatsby';

export const usePressReleasesData = () => {
  const { data } = useStaticQuery(pressReleaseQuery);
  return data.nodes;
};

const pressReleaseQuery = graphql`
  query PressReleaseListingQuery($language: String) {
    data: allDatoCmsPressRelease {
      nodes {
        ...datoCmsPressRelease
      }
    }
  }
`;
