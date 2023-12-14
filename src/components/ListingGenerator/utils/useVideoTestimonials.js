import { useStaticQuery, graphql } from 'gatsby';

const useVideoTestimonials = () => {
  const { videoTestimonials } = useStaticQuery(graphql`
    query VideoTestimonialsQuery {
      videoTestimonials: datoCmsListingComponent(
        id: { eq: "DatoCmsListingComponent-121842413" }
      ) {
        id
        videoTestimonials {
          id
          internalName
          youtubeUrl
          videoThumbnail {
            image {
              alt
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return videoTestimonials;
};

export default useVideoTestimonials;
