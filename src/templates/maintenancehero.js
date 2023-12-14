import React from 'react';
import GatsbyImage from '../components/Image/GatsbyImage';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PageBanner from '../components/Banner/PageBanner';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import { replaceH1s } from '../utils/richTextUtils';

const bannerContent = {
  colorClass: 'yellow',
  headingKicker: 'Upkeep Maintenance Hero',
  title:
    'Stories of the unsung heroes in maintenance who support and sustain our world.',
  align: 'left',
};
function MaintenanceheroTemplate(props) {
  const maintenanceheroItem = props.data?.allDatoCmsMaintenanceHeroPost.nodes;

  return (
    <Layout theme="light">
      <HeaderComponent theme="Fill - Light" />
      <div>
        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <PageBanner content={bannerContent} theme="light" />
            </Col>
            <Col md={6}>
              <HeaderImg>
                <HeroImg class="maintenance-hero-image">
                  {maintenanceheroItem[0]?.metaTags?.image?.url ? (
                    <GatsbyImage
                      src={maintenanceheroItem[0]?.metaTags?.image?.url}
                      alt=""
                    />
                  ) : (
                    <img
                      src={maintenanceheroItem[0]?.metaTags?.image?.url}
                      alt=""
                    />
                  )}
                </HeroImg>
              </HeaderImg>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <ContentContainer
            dangerouslySetInnerHTML={{
              __html: replaceH1s(maintenanceheroItem[0]?.content[0]?.content),
            }}
          />
          <hr />
        </Container>
      </div>
      <FooterComponent />
    </Layout>
  );
}

export default MaintenanceheroTemplate;

export const Head = ({ data, location }) => {
  const { allDatoCmsMaintenanceHeroPost } = data;
  const maintenanceHero = allDatoCmsMaintenanceHeroPost.nodes[0];
  return (
    <SEO
      title={maintenanceHero?.metaTags?.title}
      description={maintenanceHero?.metaTags?.description}
      indexable={maintenanceHero?.indexable}
      imgUrl={maintenanceHero?.metaTags?.image?.url}
      pathname={location?.pathname}
    />
  );
};

export const MaintenanceheroTemplatePageQuery = graphql`
  query MaintenanceheroTemplate($slug: String!) {
    allDatoCmsMaintenanceHeroPost(filter: { slug: { eq: $slug } }) {
      nodes {
        author {
          headshot {
            image {
              url
            }
          }
          internalName
        }
        category {
          internalName
          slug
        }
        metaTags {
          title
          description
          image {
            ...datoCmsAsset
          }
        }
        indexable
        slug
        internalName
        content {
          ... on DatoCmsRichText {
            content
          }
        }
      }
    }
  }
`;

const ContentContainer = styled.div`
  h1.page-title {
    text-align: center;
  }
  .wysiwyg blockquote {
    margin-bottom: 1.4em;
    border-left: 4px solid #e6e6e6;
    padding: 0.6em 1.2em;
  }
`;
const HeaderImg = styled.div`
  padding-top: 100px;
`;
const HeroImg = styled.div`
  margin-bottom: 16px;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-box-shadow: 0 2px 25px 0 rgba(36, 87, 245, 0.1);
  box-shadow: 0 2px 25px 0 rgba(36, 87, 245, 0.1);
  overflow: hidden;
  img {
    width: 100%;
  }
`;
