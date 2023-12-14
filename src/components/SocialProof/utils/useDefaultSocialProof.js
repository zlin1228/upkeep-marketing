import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useDefaultSocialProof = () => {
  const { datoCmsSocialProofComponent } = useStaticQuery(
    defaultSocialProofQuery
  );
  return datoCmsSocialProofComponent;
};

export default useDefaultSocialProof;

const defaultSocialProofQuery = graphql`
  query defaultSocialProofQuery {
    datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-120417212" }
    ) {
      id
      heading
      headingKicker
      subhead
      theme
      backgroundColor
      primaryCallToAction {
        url
        label
      }
      secondaryCallToAction {
        url
        label
      }
      socialProof {
        ...datoCmsWebsiteImage
      }
    }
  }
`;
