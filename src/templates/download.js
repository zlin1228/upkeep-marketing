import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import HeroDownloadsDetail from '../components/Hero/HeroDownloadsDetail';
import PillarEmbed from '../components/PillarEmbed';
import CardDeck from '../components/CardDeck/CardDeck';
import SocialProof from '../components/SocialProof';
import FooterComponent from '../components/Footer';

import limitWordCount from '../utils/limitWordCount';

const DownloadTemplate = ({ data, location }) => {
  const download = data?.download;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={download?.metaTags?.title}
        description={download?.metaTags?.description}
      />
      <Header theme="Transparent - Dark" />
      <HeroDownloadsDetail component={data?.download} location={location} />
      <PillarEmbed
        component={{
          structuredText: download?.structuredText,
          showTableOfContents: download?.showTableOfContents,
          showSubscriptionCard: true,
          showSlackCommunityCard: false,
          showToolsCard: false,
        }}
      />
      <CardDeck
        component={{
          heading: 'Want to keep reading?',
          subhead: 'Good choice. We have more guides about maintenance!',
          card: data?.allDownloads?.nodes?.map(download => ({
            backgroundColor: 'Light Gray',
            headingKicker: download?.category?.name,
            heading: download?.title,
            subhead: limitWordCount(download?.description, 20),
            callToAction: {
              label: 'View Download',
              url: `/downloads/${download?.slug}`,
            },
            thumbnail: {
              image: download?.thumbnailImage,
            },
          })),
        }}
      />
      <SocialProof component={data?.socialProof} />
      <FooterComponent />
    </Layout>
  );
};

export default DownloadTemplate;

export const Head = ({ data, location }) => {
  const { download } = data;
  return (
    <SEO
      pathname={location.pathname}
      title={download?.metaTags?.title}
      description={download?.metaTags?.description}
      indexable={download?.indexable}
    />
  );
};

export const getData = graphql`
  query fetchDownload($id: String!, $language: String!) {
    download: datoCmsDownload(id: { eq: $id }) {
      ...datoCmsDownload
    }
    allDownloads: allDatoCmsDownload(
      sort: { meta: { createdAt: DESC } }
      filter: { id: { ne: $id } }
      limit: 3
    ) {
      nodes {
        ...datoCmsDownload
      }
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-120353638" }
    ) {
      ...datoCmsSocialProofComponent
    }
  }
`;
