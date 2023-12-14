import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import shortid from 'shortid';
import Slider from 'react-slick';
import ResourceHubSlide from './components/ResourceHubSlide';
import ResourceHubControls from './components/ResourceHubControls';
import { heroCarouselSettings } from './utils';
import { Container, Wrapper } from './styles/ResourceHubCarousel.styled';

const ResourceHubCarousel = () => {
  const data = useStaticQuery(getData);
  const featuredResources =
    data.allDatoCmsFeaturedResource.edges[0].node.resources;
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Container>
      <Wrapper>
        <Slider ref={sliderRef} {...heroCarouselSettings(setActiveSlideIndex)}>
          {featuredResources?.map(item => (
            <ResourceHubSlide key={shortid.generate()} component={item} />
          ))}
        </Slider>
        <ResourceHubControls
          sliderRef={sliderRef}
          slides={featuredResources}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Container>
  );
};

export default ResourceHubCarousel;

const getData = graphql`
  query fetchFeaturedResources {
    allDatoCmsFeaturedResource {
      edges {
        node {
          resources {
            ... on DatoCmsBlogPost {
              id
              slug
              heading: internalName
              author {
                lastName
                firstName
                internalName
                role
                headshot {
                  ...datoCmsWebsiteImage
                }
              }
              metaTags {
                description
                image {
                  ...datoCmsAsset
                }
              }
              content {
                ... on DatoCmsRichText {
                  id
                  content
                }
              }
            }
            ... on DatoCmsTemplateCollection {
              id
              slug
              heading
              subhead
              thumbnail {
                ...datoCmsWebsiteImage
              }
            }
            ... on DatoCmsWebinar {
              id
              metaTags {
                description
                image {
                  ...datoCmsAsset
                }
              }
              slug
              heading
              subhead
              author {
                ...datoCmsPerson
              }
              thumbnailImage {
                ...datoCmsFileField
              }
            }
            ... on DatoCmsDownload {
              id
              internalName
              slug
              metaTags {
                description
                image {
                  ...datoCmsAsset
                }
              }
              heading: title
              description
              thumbnailImage {
                ...datoCmsFileField
              }
            }
            ... on DatoCmsPodcast {
              id
              slug
              metaTags {
                description
                image {
                  ...datoCmsAsset
                }
              }
              heading
              subhead
              category
              authorS {
                ...datoCmsPerson
              }
              podcastVideo {
                websiteVideo {
                  ...datoCmsWebsiteVideo
                }
              }
            }
          }
        }
      }
    }
  }
`;
