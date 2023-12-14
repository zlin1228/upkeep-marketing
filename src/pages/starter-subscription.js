import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import upkeepLogo from '../assets/logo-header.svg';
import { Main, Logo, Copyright } from '../styles/Pages/StarterSubscription';

const StarterSubscription = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Logo className="upkeep-logo" src={upkeepLogo} />
        <Hero
          component={{ ...data?.datoCmsHeroComponent, purchasePlan: 'starter' }}
        />
        <Copyright>
          <p>© 2021 UpKeep Maintenance Management</p>
          <Link to="/privacy">Privacy Policy</Link>
        </Copyright>
      </Main>
    </Layout>
  );
};

export default StarterSubscription;

export const Head = ({ location }) => (
  <SEO title="Starter Subscription | UpKeep" pathname={location?.pathname} />
);

export const StarterSubscriptionQuery = graphql`
  query StarterSubscriptionQuery($language: String!) {
    datoCmsHeroComponent(id: { eq: "DatoCmsHeroComponent-67821595" }) {
      ...datoCmsHeroComponent
    }
  }
`;
