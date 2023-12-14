import React from 'react';
import { graphql } from 'gatsby';

import Breadcrumbs from '../molecules/Breadcrumbs';
import FooterComponent from '../components/Footer';
import GatsbyImage from '../components/Image/GatsbyImage';
import HeaderComponent from '../components/Header';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import SocialProof from '../components/SocialProof';

import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Text,
  Image,
  Sidebar,
} from '../styles/Templates/integration';

const IntegrationsTemplate = ({ data: { integration, socialProof } }) => (
  <Layout>
    <HeaderComponent theme="Transparent - Dark" />
    <Section>
      <OuterWrapper>
        <Breadcrumbs theme="Blue" />
        <InnerWrapper>
          <Text>
            {integration?.internalName && (
              <h1
                className="heading"
                dangerouslySetInnerHTML={{
                  __html: integration?.internalName,
                }}
              />
            )}
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: integration?.content[0]?.content,
              }}
            />
          </Text>
          {integration?.company?.logo?.image?.gatsbyImageData && (
            <Sidebar>
              <Image>
                <GatsbyImage
                  src={integration?.company?.logo?.image?.gatsbyImageData}
                  alt={integration?.company?.name || 'integration logo'}
                />
              </Image>
            </Sidebar>
          )}
        </InnerWrapper>
      </OuterWrapper>
    </Section>
    <SocialProof component={socialProof} />
    <FooterComponent />
  </Layout>
);

export default IntegrationsTemplate;

export const Head = ({ data, location }) => {
  const { allDatoCmsIntegration } = data;
  const integration = allDatoCmsIntegration?.edges[0]?.node;
  return (
    <SEO
      title={integration?.metaTags?.title}
      description={integration?.metaTags?.description}
      indexable={integration?.indexable}
      headHtml={integration?.headHtml}
      footerHtml={integration?.footerHtml}
      imgUrl={integration?.metaTags?.image?.url}
      pathname={location?.pathname}
    />
  );
};

export const IntegrationsTemplateQuery = graphql`
  query IntegrationsTemplate($id: String!, $language: String!) {
    integration: datoCmsIntegration(id: { eq: $id }) {
      ...datoCmsIntegration
    }
    socialProof: datoCmsSocialProofComponent(
      id: { eq: "DatoCmsSocialProofComponent-147084032" }
    ) {
      ...datoCmsSocialProofComponent
    }
  }
`;
