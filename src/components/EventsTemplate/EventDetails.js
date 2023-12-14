import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import GatsbyImage from '../Image/GatsbyImage';
import Author from '../Author/Author';
import EventMeta from './EventMeta';
import {
  Container,
  Details,
  Thumbnail,
  Title,
  Post,
  Authors,
} from './styles/EventDetails.styled';

const EventDetails = ({ event }) => {
  const { t } = useTranslation();

  if (typeof event !== 'object') return null;
  return (
    <Container>
      <Thumbnail>
        <GatsbyImage
          src={event?.thumbnailImage?.image?.gatsbyImageData}
          alt={event?.thumbnailImage?.image?.alt}
        />
      </Thumbnail>
      <Details>
        {event?.title && <Title>{event?.title}</Title>}
        {event?.content && (
          <Post
            className="subhead"
            dangerouslySetInnerHTML={{ __html: event?.content }}
          />
        )}
        <EventMeta component={event} />
        {event?.authors && (
          <Authors>
            <h5>{t('Hosted By')}</h5>
            {event?.authors.map(author => (
              <Author author={author} />
            ))}
          </Authors>
        )}
      </Details>
    </Container>
  );
};

export default EventDetails;
