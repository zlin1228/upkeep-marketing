import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderComponent from '../components/Header';
import HeroPodcastDetail from '../components/Hero/HeroPodcastDetail';
import PodcastVideo from '../components/VideoComponent/PodcastVideo';
import PodcastDetails from '../components/PodcastDetail';
import SocialShare from '../molecules/SocialShare';
import Subscriptions from '../components/Subscriptions';
import PageLinks from '../components/PodcastDetail/components/PageLinks';
import CardDeck from '../components/CardDeck';
import SocialProof from '../components/SocialProof';
import FooterComponent from '../components/Footer';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Audio,
} from '../styles/Templates/podcast-details';

const PodcastDetail = ({ data, pageContext }) => (
  <Layout>
    <HeaderComponent theme="Fill - Light" />
    <HeroPodcastDetail component={data?.podcast} />
    <Section>
      <OuterWrapper>
        <SocialShare heading="" orientation="vertical" />
        <InnerWrapper>
          <PodcastVideo
            component={data?.podcast?.podcastVideo[0].websiteVideo}
          />
          <Subscriptions heading="SUBSCRIBE TO US ON:" />
          {data?.podcast?.audio && (
            <Audio dangerouslySetInnerHTML={{ __html: data?.podcast?.audio }} />
          )}
          <PodcastDetails podcast={data?.podcast} />
          <PageLinks
            component={{ next: pageContext?.next, prev: pageContext?.prev }}
          />
        </InnerWrapper>
      </OuterWrapper>
    </Section>
    <CardDeck component={data?.cardDeck} />
    <SocialProof component={data?.socialProof} />
    <FooterComponent />
  </Layout>
);

export default PodcastDetail;

export const Head = ({ data, location }) => {
  const { podcast } = data;
  return (
    <SEO
      title={podcast?.metaTags?.title}
      indexable={podcast?.indexable}
      description={podcast?.metaTags?.description}
      imgUrl={podcast?.metaTags?.image?.fluid?.src}
      pathname={location?.pathname}
    />
  );
};

export const getData = graphql`
  query fetchPodcast($id: String!, $language: String!) {
    podcast: datoCmsPodcast(id: { eq: $id }) {
      ...datoCmsPodcast
    }
    cardDeck: datoCmsCardDeckComponent(
      id: { eq: "DatoCmsCardDeckComponent-122627000" }
    ) {
      ...datoCmsCardDeckComponent
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-120353638" }
    ) {
      id
      internal {
        type
      }
      heading
      headingKicker
      subhead
      theme
      backgroundColor
      primaryCallToAction {
        ...datoCmsCallToAction
      }
      secondaryCallToAction {
        ...datoCmsCallToAction
      }
      socialProof {
        ...datoCmsWebsiteImage
      }
    }
  }
`;
