import { useStaticQuery, graphql } from 'gatsby';

export const useTemplateData = () => {
  const {
    allDatoCmsTemplateCollection,
    allDatoCmsTemplateAsset,
    allDatoCmsTemplateCategory,
    allDatoCmsIndustry,
  } = useStaticQuery(
    graphql`
      query TemplatesListingQuery($language: String) {
        allDatoCmsTemplateCollection {
          edges {
            node {
              heading
              internalName
              publishDate
              slug
              subhead
              metaTags {
                description
                title
                image {
                  url
                }
              }
              industry {
                ...datoCmsIndustry
              }
              asset {
                slug
                name
              }
              category {
                name
                slug
              }
              thumbnail {
                ...datoCmsWebsiteImage
              }
            }
          }
        }
        allDatoCmsTemplateAsset {
          nodes {
            name
            slug
            originalId
          }
        }
        allDatoCmsTemplateCategory {
          nodes {
            name
            slug
            originalId
          }
        }
        allDatoCmsIndustry(sort: { originalId: ASC }) {
          nodes {
            ...datoCmsIndustry
          }
        }
      }
    `
  );
  return {
    allDatoCmsTemplateCollection,
    allDatoCmsTemplateAsset,
    allDatoCmsTemplateCategory,
    allDatoCmsIndustry,
  };
};
