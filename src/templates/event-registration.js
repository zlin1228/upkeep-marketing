import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Layout from '../components/layout';
import HeaderComponent from '../components/Header';
import Breadcrumbs from '../molecules/Breadcrumbs';
import EventDetails from '../components/EventsTemplate/EventDetails';
import EventsForm from '../components/Forms/EventsForm';
import FooterComponent from '../components/Footer';
import ConversionPanel from '../components/ConversionPanel';
import conversionPanelContent from '../components/ConversionPanel/data/defaultData';
import {
  Section,
  Sidebar,
  InnerWrapper,
  OuterWrapper,
} from '../styles/Templates/event';

const EventRegistration = ({ data }) => {
  if (!data?.event) return null;
  const { eventRegistration } = data?.event;

  return (
    <Layout>
      <HeaderComponent theme="Transparent - Dark" />
      <main>
        <Section>
          <OuterWrapper>
            <Breadcrumbs theme="Light" resource />
            <InnerWrapper>
              <EventDetails event={data?.event} />
              {eventRegistration && (
                <Sidebar>
                  <EventsForm component={data?.event} />
                </Sidebar>
              )}
            </InnerWrapper>
          </OuterWrapper>
        </Section>
        <ConversionPanel component={conversionPanelContent} />
      </main>
      <FooterComponent />
    </Layout>
  );
};

export default EventRegistration;

export const Head = ({ data, location }) => {
  const { event } = data;
  return (
    <SEO
      title={event?.metaTags?.title}
      description={event?.metaTags?.description}
      imgUrl={event?.metaTags?.image?.url}
      pathname={location?.pathname}
      indexable={event?.indexable}
    />
  );
};

export const getData = graphql`
  query EventRegistrationQuery($id: String!, $language: String) {
    event: datoCmsEventPost(id: { eq: $id }) {
      ...datoCmsEventPost
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
