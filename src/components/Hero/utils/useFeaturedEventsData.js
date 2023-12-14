import { useStaticQuery, graphql } from 'gatsby';

export const useFeaturedEventsData = () => {
  const { datoCmsFeaturedEvent } = useStaticQuery(
    graphql`
      query EventsListingHeroQuery($language: String) {
        datoCmsFeaturedEvent {
          event {
            id
            slug
            title
            description
            eventStatus
            eventRegistration {
              ... on DatoCmsCallToAction {
                id
                internal {
                  type
                }
                label
                url
              }
              ... on DatoCmsWebsiteForm {
                id
                internal {
                  type
                }
                heading(locale: $language, fallbackLocales: "en")
                subhead(locale: $language, fallbackLocales: "en")
                callToAction(locale: $language, fallbackLocales: "en")
                pardotFormHandler
                livestormFormEmbed
              }
            }
            thumbnailImage {
              image {
                alt
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );
  return { datoCmsFeaturedEvent };
};
