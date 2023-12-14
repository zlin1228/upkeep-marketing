import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import componentGenerator from '../utils/componentGenerator';
import ExitIntentTest from '../components/ExitIntent/ExitIntentTest';
import getAnnouncementBar from '../utils/getAnnouncementBar';
import { useAnnouncementBar } from '../context/announcementBarContext';
import ChiliPiper from '../components/SEO/ChiliPiper';

const PageTemplate = ({ data, location, pageContext }) => {
  const page = data?.datoCmsWebsitePage;
  const components = page?.components;
  const { slug } = pageContext;
  const announcementBar = getAnnouncementBar(components);
  const { setShowAnnouncementBar, showAnnouncementBar } = useAnnouncementBar();

  useEffect(() => {
    setShowAnnouncementBar(!!announcementBar);
  }, []);

  return (
    <Layout>
      <ExitIntentTest />
      {componentGenerator({
        slug,
        location,
        components,
        postTypes: {
          blog: data?.allDatoCmsBlogPost?.nodes,
          customers: data?.allDatoCmsCustomerSuccessStory?.nodes,
          events: data?.allDatoCmsEventPost?.nodes,
          learning: data?.allDatoCmsLearningPost?.nodes,
          integrations: data?.allDatoCmsIntegration?.nodes,
        },
        pageMeta: page,
        showAnnouncementBar,
        setShowAnnouncementBar,
      })}
      {(location?.pathname === '/demo/' ||
        location?.pathname === '/cmmsradio/') && (
        <ChiliPiper pathname={location?.pathname} />
      )}
    </Layout>
  );
};

export default PageTemplate;

export const Head = ({ data, location }) => {
  const { datoCmsWebsitePage: page } = data;

  return (
    <>
      <SEO
        title={page?.metaTags?.title || page?.internalName}
        description={page?.metaTags?.description}
        indexable={page?.pageMeta?.indexable || true}
        imgUrl={page?.metaTags?.image?.url}
        pathname={location?.pathname}
      />
    </>
  );
};

export const PageQuery = graphql`
  query(
    $id: String!
    $language: String!
    $queryBlog: Boolean!
    $queryCustomerStories: Boolean!
    $queryEvents: Boolean!
    $queryLearning: Boolean!
    $queryIntegrations: Boolean!
  ) {
    datoCmsWebsitePage(id: { eq: $id }) {
      ...datoCmsWebsitePage
    }
    allDatoCmsBlogPost(sort: { meta: { createdAt: DESC } })
      @include(if: $queryBlog) {
      nodes {
        ...datoCmsBlogPost
      }
    }
    allDatoCmsCustomerSuccessStory(sort: { meta: { createdAt: DESC } })
      @include(if: $queryCustomerStories) {
      nodes {
        ...datoCmsCustomerSuccessStory
      }
    }
    allDatoCmsEventPost(sort: { meta: { updatedAt: DESC } })
      @include(if: $queryEvents) {
      nodes {
        ...datoCmsEventPost
      }
    }
    allDatoCmsLearningPost(sort: { meta: { publishedAt: DESC } })
      @include(if: $queryLearning) {
      nodes {
        ...datoCmsLearningPost
      }
    }
    allDatoCmsIntegration(sort: { internalName: ASC })
      @include(if: $queryIntegrations) {
      totalCount
      nodes {
        ...datoCmsIntegration
      }
    }
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
