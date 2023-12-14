import { useStaticQuery, graphql } from 'gatsby';

export const useReviewsData = () => {
  const { allDatoCmsCustomerReview } = useStaticQuery(allReviewsQuery);
  return {
    reviews: allDatoCmsCustomerReview?.nodes,
  };
};

const allReviewsQuery = graphql`
  query ReviewsListingQuery {
    allDatoCmsCustomerReview(sort: { meta: { createdAt: DESC } }) {
      totalCount
      nodes {
        ...datoCmsCustomerReview
      }
    }
  }
`;
