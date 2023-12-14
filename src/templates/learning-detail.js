import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderComponent from '../components/Header';
import LearningDetailHero from '../components/Hero/LearningDetailHero';
import CardDeck from '../components/CardDeck/CardDeck';
import SubscriptionCard from '../components/Cards/SubscriptionCard';
import SocialShare from '../molecules/SocialShare';
import TableOfContents from '../components/TableOfContents';
import useTableOfContents from '../components/TableOfContents/utils/useTableOfContents';
import MobileTableOfContents from '../components/TableOfContents/MobileTableOfContents';
import SocialProof from '../components/SocialProof';
import FooterComponent from '../components/Footer';

import { generateAlertCards, replaceH1s } from '../utils/richTextUtils';

import {
  Main,
  Section,
  Wrapper,
  Sidebar,
  Content,
} from '../styles/Templates/learningDetail';

const usePostFormatter = data => {
  if (!data || data === `undefined`) return null;
  const post = data?.post || '';
  const formattedPost = generateAlertCards(replaceH1s(post));
  return formattedPost;
};

const LearningDetail = ({ data }) => {
  const { t } = useTranslation();
  const contentRef = useRef();
  const post = data.datoCmsLearningPost;
  const relatedPosts = post.relatedPosts;
  const formattedPost = usePostFormatter(post);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
      setTableData(useTableOfContents(contentRef.current));
    }
  }, []);

  return (
    <Layout>
      <HeaderComponent theme="Transparent - Dark" />
      <Main>
        <LearningDetailHero component={post} />
        <Section>
          <Wrapper>
            <Sidebar>
              <SocialShare heading={`${t('Share this article')}:`} />
              <TableOfContents component={tableData} />
              <SubscriptionCard />
            </Sidebar>
            <Content>
              <MobileTableOfContents component={tableData} />
              <div
                className="post"
                ref={contentRef}
                dangerouslySetInnerHTML={{
                  __html: formattedPost,
                }}
              />
            </Content>
          </Wrapper>
        </Section>
        {relatedPosts.length > 0 && (
          <CardDeck
            component={{
              backgroundColor: 'DarkBlue/25',
              heading: t('Want to keep reading?'),
              subhead: t(
                'Good choice. We have more articles about maintenance!'
              ),
              card: post?.relatedPosts?.map(item => ({
                headingKicker: item.categories.map(cat => cat.name).join(', '),
                heading: item?.internalName || item?.metaTags?.title || '',
                subhead: item?.metaTags?.description || '',
                callToAction: {
                  url: `/learning/${item.slug}`,
                  label: t('View Article'),
                },
              })),
            }}
          />
        )}
        <SocialProof component={data?.socialProof} />
      </Main>
      <FooterComponent />
    </Layout>
  );
};

export default LearningDetail;

export const Head = ({ data, location }) => {
  const post = data.datoCmsLearningPost;

  return (
    <SEO
      title={post?.metaTags?.title}
      description={post?.metaTags?.description}
      indexable={post?.indexable}
      imgUrl={post?.metaTags?.image?.url}
      pathname={location?.pathname}
    />
  );
};

export const LearningDetailQuery = graphql`
  query LearningDetailQuery($id: String!, $language: String!) {
    datoCmsLearningPost(id: { eq: $id }) {
      ...learningDetailQuery
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-148256732" }
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
