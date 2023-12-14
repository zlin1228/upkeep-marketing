import React, { useEffect } from 'react';
import { captureMessage } from '@sentry/gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import componentGenerator from '../utils/componentGenerator';
import getAnnouncementBar from '../utils/getAnnouncementBar';
import { useAnnouncementBar } from '../context/announcementBarContext';
import { Container } from '../styles/Pages/404';

const NotFoundPage = ({ data, location }) => {
  const page = data?.datoCmsWebsitePage;
  const announcementBar = getAnnouncementBar(page?.components);
  const { setShowAnnouncementBar, showAnnouncementBar } = useAnnouncementBar();

  useEffect(() => {
    setShowAnnouncementBar(!!announcementBar);
  }, []);

  useEffect(() => {
    captureMessage(`404 Error - Page ${location?.href} not found`, {
      level: 'error',
    });
  }, []);

  return (
    <Layout>
      <Container>
        {componentGenerator({
          slug: '404',
          components: page?.components,
          showAnnouncementBar,
          setShowAnnouncementBar,
        })}
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = ({ data, location }) => {
  const { datoCmsWebsitePage } = data;
  return (
    <SEO
      title={datoCmsWebsitePage?.metaTags?.title || '404: Not found'}
      description={datoCmsWebsitePage?.metaTags?.description}
      indexable={datoCmsWebsitePage?.indexable || true}
      imgUrl={datoCmsWebsitePage?.metaTags?.image?.url}
      pathname={location?.pathname}
    />
  );
};

export const NotFoundQuery = graphql`
  query NotFoundQuery($language: String!) {
    datoCmsWebsitePage(id: { eq: "DatoCmsWebsitePage-121766452" }) {
      ...datoCmsWebsitePage
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
