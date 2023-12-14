import { useStaticQuery, graphql } from 'gatsby';

export const useLearningData = () => {
  const { allDatoCmsLearningPost } = useStaticQuery(
    graphql`
      query LearningHeroQuery {
        allDatoCmsLearningPost(sort: { meta: { publishedAt: DESC } }) {
          edges {
            node {
              id
              internalName
              metaTags {
                title
                description
              }
              slug
              categories {
                id
                categoryType
                name
                safeName
              }
            }
          }
        }
      }
    `
  );
  return { allDatoCmsLearningPost };
};
