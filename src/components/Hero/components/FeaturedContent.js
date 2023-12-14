import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from '../../Image/GatsbyImage';
import { FeaturedTag, FeaturedContentStyles } from '../styles/FeaturedContent';

const FeaturedContent = ({ reverse, featuredContent }) => (
  <FeaturedContentStyles lg={7} reverse={reverse}>
    <Link to={`${featuredContent?.slug}`}>
      {featuredContent?.featuredTag && (
        <FeaturedTag>
          <h4>{featuredContent?.featuredTag?.label}</h4>
        </FeaturedTag>
      )}
      <GatsbyImage
        src={featuredContent?.thumbnail?.image}
        alt={featuredContent?.thumbnail?.alt}
        loading="eager"
      />
    </Link>
  </FeaturedContentStyles>
);

export default FeaturedContent;
