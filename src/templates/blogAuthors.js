import React from 'react';
import { graphql } from 'gatsby';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import Blog from '../components/ListingGenerator/components/Blog';

import { Section, Wrapper } from '../styles/Pages/BlogAuthor.styled';

const BlogAuthorsTemplate = ({ pageContext, data }) => {
  const { firstName, lastName } = pageContext;

  return (
    <Layout>
      <HeaderComponent theme="Transparent - Light" />
      <Section>
        <Wrapper>
          <p className="heading-kicker">Author</p>
          <h1 className="heading">{`${firstName} ${lastName}`}</h1>
        </Wrapper>
      </Section>
      <Blog data={data?.allDatoCmsBlogPost?.nodes} />
      <FooterComponent />
    </Layout>
  );
};

export const Head = ({ location, pageContext }) => {
  const { firstName, lastName } = pageContext;

  return (
    <SEO
      title={`UpKeep Blog - Author ${firstName} ${lastName}`}
      pathname={location?.pathname}
    />
  );
};

export const PageQuery = graphql`
  query($id: String!, $language: String!) {
    allDatoCmsBlogPost(
      filter: { author: { id: { eq: $id } } }
      sort: { meta: { createdAt: DESC } }
    ) {
      nodes {
        ...blogPostAuthorQuery
      }
    }
  }
`;

export default BlogAuthorsTemplate;
