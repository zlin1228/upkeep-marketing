import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from '../Image/GatsbyImage';

const FallbackImage = () => {
  const {
    datoCmsWebsiteImage: { image },
  } = useStaticQuery(getFallbackImage);
  return <GatsbyImage src={image?.gatsbyImageData} alt={image?.alt} />;
};

export default FallbackImage;

const getFallbackImage = graphql`
  query getFallbackImage {
    datoCmsWebsiteImage(internalName: { eq: "UpKeep Fallback" }) {
      ...datoCmsWebsiteImage
    }
  }
`;
