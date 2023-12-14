import React, { useState } from 'react';
import { StructuredText } from 'react-datocms';
import { useWindowSize } from 'react-use';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/HeroMaintenanceMavericks';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import CardDeck from '../components/CardDeck/CardDeck';
import SocialProof from '../components/SocialProof';
import SubscriptionCard from '../components/Cards/SubscriptionCard';
import SocialShare from '../molecules/SocialShare';

import { breakpointNumbers } from '../atoms/breakpoints';

import {
  Buttons,
  Container,
  Post,
  Section,
  Wrapper,
} from '../styles/Templates/maintenance-mavericks.styled';

const Mavericks = ({ data: { page, recentPages, socialProof } }) => {
  const [activeArticle, setActiveArticle] = useState(page.summary);
  const { width } = useWindowSize();

  const formattedRecentPages = recentPages.nodes.map(recentPage => ({
    ...recentPage,
    thumbnail: {
      image: recentPage.metaTags.image,
    },
    callToAction: {
      url: `/resources/maintenance-mavericks/${recentPage.slug}`,
      label: 'Learn more',
    },
  }));

  return (
    <Layout>
      <HeaderComponent theme="Transparent - Dark" />
      <main>
        <Hero {...page} />
        <Section>
          <Wrapper className="grid">
            <div className="social-links">
              <SocialShare
                orientation={
                  width >= breakpointNumbers.xl ? 'vertical' : 'horizontal'
                }
                heading="SHARE ARTICLE"
              />
            </div>
            <Container>
              <Buttons>
                <button
                  type="button"
                  onClick={() => setActiveArticle(page.summary)}
                  className={activeArticle === page.summary ? 'active' : ''}
                >
                  Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(page.transcript)}
                  className={activeArticle === page.transcript ? 'active' : ''}
                >
                  Transcript
                </button>
              </Buttons>
              <hr />
              <Post>
                <StructuredText data={activeArticle} />
              </Post>
            </Container>
            <aside className="sidebar">
              <SubscriptionCard />
            </aside>
          </Wrapper>
        </Section>
        {formattedRecentPages >= 3 && (
          <CardDeck
            component={{
              backgroundColor: 'Midnight/25',
              showParallaxGrid: true,
              heading: 'Empowering Our Mavericks, One Story at a Time',
              card: formattedRecentPages,
            }}
          />
        )}
        <SocialProof component={socialProof} />
      </main>
      <FooterComponent />
    </Layout>
  );
};

export const Head = ({ data, location }) => {
  const { page } = data;

  return (
    <SEO
      title={`${page?.metaTags?.title} | UpKeep`}
      indexable={page?.indexable}
      description={page?.metaTags?.description}
      imgUrl={page?.metaTags?.image?.fluid?.src}
      pathname={location?.pathname}
    />
  );
};

export default Mavericks;

export const MavericksTemplateQuery = graphql`
  query MavericksTemplateQuery($id: String!, $language: String!) {
    page: datoCmsTemplateMaintenanceMaverick(id: { eq: $id }) {
      ...datoCmsTemplateMaintenanceMaverick
    }
    recentPages: allDatoCmsTemplateMaintenanceMaverick(
      limit: 3
      sort: { meta: { createdAt: DESC } }
      filter: { id: { ne: $id } }
    ) {
      nodes {
        ...datoCmsTemplateMaintenanceMaverick
      }
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-HtW9UZb8SBi4KnHf1qYRFQ" }
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
