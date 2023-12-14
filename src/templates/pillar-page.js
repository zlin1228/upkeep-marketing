import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import PageProgressBar from '../components/ProgressBar/PageProgressBar';
import FAQEntity from '../components/SEO/StructuredData/faqEntity';
import ExitIntentTest from '../components/ExitIntent/ExitIntentTest';
import getAnnouncementBar from '../utils/getAnnouncementBar';
import { useAnnouncementBar } from '../context/announcementBarContext';
import componentGenerator from '../utils/componentGenerator';

const PillarPage = ({ data, pageContext }) => {
  const page = data?.datoCmsPillarTemplate;
  const announcementBar = getAnnouncementBar(page?.components);
  const { setShowAnnouncementBar, showAnnouncementBar } = useAnnouncementBar();

  useEffect(() => {
    setShowAnnouncementBar(!!announcementBar);
  }, []);

  return (
    <Layout>
      <PageProgressBar />
      <ExitIntentTest />
      {componentGenerator({
        slug: pageContext?.slug,
        components: page?.components,
        showAnnouncementBar,
        setShowAnnouncementBar,
      })}
    </Layout>
  );
};

export default PillarPage;

export const Head = ({ data, location }) => {
  const { datoCmsPillarTemplate: page } = data;
  const accordionComponent = page?.components?.filter(
    item => item?.internal?.type === 'DatoCmsAccordionComponent'
  );
  return (
    <SEO
      title={page?.metaTags?.title}
      indexable={page?.indexable}
      description={page?.metaTags?.description}
      imgUrl={page?.metaTags?.image?.url}
      pathname={location?.pathname}
      pageType="FAQPage"
      mainEntity={
        accordionComponent?.length > 0 &&
        FAQEntity(accordionComponent[0]?.accordion)
      }
      datePublished={page?.meta?.publishedAt}
      dateModified={page?.meta?.updatedAt}
    />
  );
};

export const getPillarPage = graphql`
  query PillarPageQuery($id: String!, $language: String!) {
    datoCmsPillarTemplate(id: { eq: $id }) {
      ...datoCmsPillarTemplate
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
