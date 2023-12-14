import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  return useStaticQuery(getData);
};

const getData = graphql`
  query featuresDataQuery($language: String) {
    featuresCardDeckA: allDatoCmsCardDeckComponent(
      filter: { id: { eq: "DatoCmsCardDeckComponent-37856679" } }
    ) {
      edges {
        node {
          id
          heading
          backgroundColor
          card {
            ...datoCmsCardComponent
          }
          subhead
        }
      }
    }
    featuresCardDeckB: allDatoCmsCardDeckComponent(
      filter: { id: { eq: "DatoCmsCardDeckComponent-37856709" } }
    ) {
      edges {
        node {
          id
          heading
          backgroundColor
          card {
            ...datoCmsCardComponent
          }
          subhead
        }
      }
    }
  }
`;
