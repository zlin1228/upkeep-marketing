import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import InlineVideo from '../molecules/InlineVideo';

import SEO from '../components/SEO/SEO';
import Layout from '../components/layout';
import HeaderComponent from '../components/Header';
import Breadcrumbs from '../molecules/Breadcrumbs';
import Author from '../components/Author/Author';
import PageProgressBar from '../components/ProgressBar/PageProgressBar';
import EventsInfoBar from '../components/InfoBar/EventsInfoBar';
import SubscriptionCard from '../components/Cards/SubscriptionCard';
import RecommendedEvents from '../components/Sidebar/RecommendedEvents';
import CardDeck from '../components/CardDeck/CardDeck';
import FooterComponent from '../components/Footer';

import {
  Main,
  Section,
  Content,
  Details,
  Header,
  Authors,
  Event,
  Sidebar,
} from '../styles/Templates/eventDetail';

const recommendedCards = (events, translate) =>
  events.map(event => ({
    backgroundColor: 'Light Gray',
    headingKicker: translate('Event'),
    heading: event?.title,
    subhead: event?.description,
    thumbnail: event?.thumbnailImage,
    callToAction: {
      url: `https://www.upkeep.com/events/${event?.slug}`,
      label: translate('Learn more'),
    },
  }));

const EventDetail = ({ data }) => {
  const { t } = useTranslation();
  const [playVideo, setPlayVideo] = useState(false);

  const { event, fallbackRecommendedEvents } = data;
  const recommendedEvents =
    event?.recommendedEvents || fallbackRecommendedEvents;

  return (
    <Layout>
      <HeaderComponent theme="Transparent - Dark" />
      <PageProgressBar />
      <Main>
        <Section>
          <Content className="track-progress">
            <Details>
              <Header>
                <Breadcrumbs theme="Light" />
                <h1 className="heading">{event?.title}</h1>
                <EventsInfoBar
                  readTime={event?.duration}
                  author={event?.authors?.[0]}
                  publishDate={event?.meta?.publishedAt}
                />
              </Header>
              <InlineVideo
                youtubeURL={event?.video?.youtubeUrl}
                thumbnail={event?.video?.videoThumbnail?.image?.url}
                customPlayState={playVideo}
                setCustomPlayState={setPlayVideo}
                onChange={() => setPlayVideo(true)}
              />
              {event.authors && (
                <Authors>
                  <p className="heading">{t('Hosted By')}</p>
                  <div className="authors">
                    {event.authors.map(author => (
                      <Author key={author?.id} author={author} />
                    ))}
                  </div>
                </Authors>
              )}
              <Event dangerouslySetInnerHTML={{ __html: event?.content }} />
            </Details>
            <Sidebar>
              <RecommendedEvents events={recommendedEvents} />
              <SubscriptionCard />
            </Sidebar>
          </Content>
        </Section>
        <CardDeck
          component={{
            heading: t('Want to keep watching?'),
            subhead: t('Good choice. We have more webinars about maintenance!'),
            card: recommendedCards(recommendedEvents, t),
          }}
        />
      </Main>
      <FooterComponent />
    </Layout>
  );
};

export default EventDetail;

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
  query EventDetailTemplateQuery($id: String!, $language: String) {
    event: datoCmsEventPost(id: { eq: $id }) {
      ...datoCmsEventPost
    }
    fallbackRecommendedEvents: allDatoCmsEventPost(
      filter: { id: { ne: $id } }
      limit: 3
    ) {
      nodes {
        ...datoCmsEventPost
      }
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
