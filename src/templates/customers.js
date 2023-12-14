import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import CardDeck from '../components/CardDeck/CardDeck';
import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import Showcase from '../components/Showcase/Showcase';
import SideBar from '../components/CustomersTemplate/components/Sidebar';
import SocialProof from '../components/SocialProof';

import limitWordCount from '../utils/limitWordCount';
import { replaceH1s } from '../utils/richTextUtils';

import {
  BodySection,
  BodyWrapper,
  Content,
  Main,
} from '../components/CustomersTemplate/styles/CustomersTemplate.styled';

const CustomersTemplate = ({ data }) => {
  const { t } = useTranslation();

  const { customerStory, recentCustomerStories, socialProof } = data;
  const {
    hero,
    showShowcase,
    showcase,
    company,
    industry,
    content,
  } = customerStory;

  return (
    <Layout theme="light">
      <HeaderComponent theme="Fill - Light" />
      <Main>
        <Hero component={hero} />
        {showShowcase && <Showcase component={showcase} />}
        <BodySection showCase={showShowcase}>
          <BodyWrapper>
            <SideBar company={company} industry={industry} />
            <Content
              dangerouslySetInnerHTML={{
                __html: replaceH1s(content[0].content),
              }}
            />
          </BodyWrapper>
        </BodySection>
        <CardDeck
          component={{
            heading: t('Want to keep reading?'),
            subhead: t('Good choice. We have more articles about maintenance!'),
            card: recentCustomerStories?.nodes?.map(post => ({
              backgroundColor: 'Light Gray',
              headingKicker: post?.industry?.name,
              heading: post?.internalName || post?.metaTags?.title,
              subhead: limitWordCount(post?.metaTags?.description, 20),
              callToAction: {
                label: t('View Article'),
                url: `/customers/${post?.slug}`,
              },
              thumbnail: {
                image: {
                  gatsbyImageData: post?.metaTags?.image?.gatsbyImageData,
                },
              },
            })),
          }}
        />
        <SocialProof component={socialProof} />
      </Main>
      <FooterComponent />
    </Layout>
  );
};

export default CustomersTemplate;

export const Head = ({ data, location }) => {
  const { metaTags, internalName } = data?.customerStory;

  return (
    <SEO
      title={metaTags?.title || internalName}
      description={metaTags?.description}
      indexable
      imgUrl={metaTags?.image?.url}
      pathname={location?.pathname}
    />
  );
};

export const CustomersTemplateQuery = graphql`
  query CustomersTemplate($id: String!, $language: String!) {
    customerStory: datoCmsCustomerSuccessStory(id: { eq: $id }) {
      ...datoCmsCustomerSuccessStory
    }
    recentCustomerStories: allDatoCmsCustomerSuccessStory(
      filter: { id: { ne: $id } }
      limit: 3
    ) {
      nodes {
        ...datoCmsCustomerSuccessStory
      }
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-147439255" }
    ) {
      ...datoCmsSocialProofComponent
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
