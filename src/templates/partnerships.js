import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import SEO from '../components/SEO/SEO';
import Layout from '../components/layout';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import { replaceH1s } from '../utils/richTextUtils';
import {
  Breadcrumbs,
  BreadcrumbsLink,
  BreadcrumbsText,
} from '../styles/Components/breadcrumb';
import { InnerContent } from '../styles/Templates/wysiwyg-content';

function PartnershipsTemplate(props) {
  const { catslug } = props?.pageContext;
  const activePartnerships = props.data?.allDatoCmsPartnership.edges[0];
  return (
    <Layout theme="light">
      <HeaderComponent theme="Transparent - Dark" />
      <Main className="px-3">
        <div>
          <Container>
            <Row>
              <Col lg={8} className="pl-0">
                <Breadcrumbs>
                  <BreadcrumbsLink to="/partnerships">
                    UpKeep Integration
                  </BreadcrumbsLink>
                  <span className="seperator px-1">/</span>
                  <BreadcrumbsLink to="/partnerships/" state={{ catslug }}>
                    {activePartnerships?.node?.category?.internalName}
                  </BreadcrumbsLink>
                  <span className="seperator px-1">/</span>
                  <BreadcrumbsText>
                    {activePartnerships?.node?.internalName}
                  </BreadcrumbsText>
                </Breadcrumbs>
              </Col>
            </Row>
          </Container>
          <Container className=" pb-5">
            <Row className="justify-content-center pt-4">
              <Col lg={8} className="pl-0">
                <InnerContent>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: activePartnerships?.node?.internalName,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: replaceH1s(
                        activePartnerships?.node?.content[0]?.content
                      ),
                    }}
                  />
                </InnerContent>
                <SignupSection>
                  <h2>Simplify your maintenance, today.</h2>
                  <p>Start for free. Upgrade any time.</p>
                  <Breadcrumbs className="sign-links">
                    <Link to="/free-trial-signup">Sign up for free</Link>
                    <Link to="/demo" className="demo-link">
                      Schedule a demo
                    </Link>
                  </Breadcrumbs>
                </SignupSection>
              </Col>
              <Col lg={4}>
                <Sidebar>
                  <SideBlock>
                    <Box>
                      <img
                        src={
                          activePartnerships?.node?.company?.logo?.image?.url
                        }
                        alt={activePartnerships?.node?.company?.name || 'logo'}
                      />
                    </Box>
                  </SideBlock>
                </Sidebar>
              </Col>
            </Row>
          </Container>
        </div>
      </Main>
      <FooterComponent />
    </Layout>
  );
}

export default PartnershipsTemplate;

export const Head = ({ data, location }) => {
  const { allDatoCmsPartnership } = data;
  const { metaTags } = allDatoCmsPartnership?.edges?.[0]?.node;
  const indexable = allDatoCmsPartnership?.edges?.[0]?.node?.indexable;
  return (
    <SEO
      title={metaTags?.title}
      description={metaTags?.description}
      indexable={indexable}
      imgUrl={metaTags?.image?.url}
      pathname={location.pathname}
    />
  );
};

export const PartnershipsTemplateQuery = graphql`
  query PartnershipsTemplate($id: String!) {
    allDatoCmsPartnership(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          internalName
          slug
          indexable
          category {
            originalId
            internalName
            slug
          }
          content {
            ... on DatoCmsRichText {
              id
              content
            }
          }
          company {
            ...datoCmsCompany
          }
          metaTags {
            description
            image {
              url
            }
            title
            twitterCard
          }
        }
      }
    }
  }
`;
const Main = styled.main`
  padding-top: 180px;
  .detail-width {
    max-width: 670px;
  }
`;
const Box = styled.div`
  border: 1px solid #d2d4da;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 56px 0;
  img {
    max-height: 60px;
    max-width: 100%;
  }
`;
const Sidebar = styled.div`
  position: sticky;
  left: 0;
  top: 100px;
`;
const SideBlock = styled.div`
  padding: 24px;
  hr {
    border-color: #eaeaec;
    margin-bottom: 24px;
  }
`;
const SignupSection = styled.div`
  border: 1px solid #d2d4da;
  box-sizing: border-box;
  padding: 40px;
  .sign-links {
    font-family: 'Sharp Sans Display No 2';
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    a {
      position: relative;
      margin-right: 3rem;
      &:after {
        position: absolute;
        content: '';
        top: 9px;
        left: 100%;
        margin-left: 12px;
        transform: rotate(45deg);
        width: 6px;
        height: 6px;
        border-top: 2px solid #007bff;
        border-right: 2px solid #007bff;
        transition: margin-left 0.3s ease, opacity 0.1s ease 0.2s;
      }
      &:before {
        position: absolute;
        content: '';
        top: 11px;
        left: 100%;
        margin-left: 12px;
        width: 8px;
        border-bottom: 2px solid #007bff;
        opacity: 0;
        width: 0;
        transition: all 0.3s ease;
      }
      &:hover {
        &:before {
          opacity: 1;
          width: 10px;
        }
        &:after {
          margin-left: 18px;
          opacity: 1;
          transition: margin-left 0.3s ease, opacity 0.1s ease;
        }
      }
      &.demo-link {
        display: inline-block;
      }
    }
  }
`;
