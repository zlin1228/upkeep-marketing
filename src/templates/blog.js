import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import PageProgressBar from '../components/ProgressBar/PageProgressBar';
import HeaderComponent from '../components/Header';
import HeroBlogDetail from '../components/Hero/HeroBlogDetail';
import Loader from '../components/Loader/Loader';
import PillarEmbed from '../components/PillarEmbed';
import CardDeck from '../components/CardDeck/CardDeck';
import SocialProof from '../components/SocialProof';
import FooterComponent from '../components/Footer';

import useTableOfContents from '../components/TableOfContents/utils/useTableOfContents';
import useBlogUtils from '../hooks/useBlogUtils';
import setBlogSchema from '../components/Blog/utils/setBlogSchema';
import limitWordCount from '../utils/limitWordCount';

import { atMinWidth } from '../atoms/breakpoints';

const BlogDetail = ({ data, location }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const contentRef = useRef(null);
  const blog = data?.datoCmsBlogPost;
  const { post, form, readingTime } = useBlogUtils(
    blog?.content[0]?.content,
    setLoading
  );

  useEffect(() => {
    if (contentRef.current) {
      setTableData(useTableOfContents(contentRef.current));
    }
  }, [post]);

  return (
    <Layout>
      <PageProgressBar />
      <HeaderComponent theme="Transparent - Dark" />
      <HeroBlogDetail component={{ ...blog, readingTime }} />
      {loading ? (
        <Loader />
      ) : (
        <PillarEmbed
          component={{
            richTextRef: contentRef,
            richText: post,
            tableData,
            showTableOfContents: true,
            showSubscriptionCard: true,
            showSlackCommunityCard: false,
            showToolsCard: false,
          }}
        />
      )}
      <CardDeckStyles>
        <CardDeck
          component={{
            heading: t('Want to keep reading?'),
            subhead: t('Good choice. We have more articles about maintenance!'),
            card: blog?.recommendPostsBottom?.map(post => ({
              backgroundColor: 'Light Gray',
              headingKicker: t('Article'),
              heading: post?.metaTags?.title || post?.internalName,
              subhead: limitWordCount(post?.metaTags?.description, 20),
              callToAction: {
                label: t('View Article'),
                url: `/blog/${post?.slug}`,
              },
              thumbnail: {
                image: {
                  gatsbyImageData: post?.metaTags?.image?.gatsbyImageData,
                },
              },
            })),
          }}
        />
      </CardDeckStyles>
      <SocialProof component={data?.socialProof} />
      <FooterComponent />
    </Layout>
  );
};

export default BlogDetail;

export const Head = ({ data, location }) => {
  const { datoCmsBlogPost } = data;
  return (
    <SEO
      title={datoCmsBlogPost?.metaTags?.title}
      description={datoCmsBlogPost?.metaTags?.description}
      indexable={datoCmsBlogPost?.indexable}
      imgUrl={datoCmsBlogPost?.metaTags?.image?.url}
      pathname={location.pathname}
      schema={setBlogSchema(datoCmsBlogPost)}
    />
  );
};

export const BlogDetailQuery = graphql`
  query BlogDetailQuery($id: String!, $language: String!) {
    datoCmsBlogPost(id: { eq: $id }) {
      ...blogPostDetailQuery
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

const CardDeckStyles = styled.div`
  ${atMinWidth.xl`
    .card-component .gatsby-image {
    max-height: 207px;
  }
`}
`;
