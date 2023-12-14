import React from 'react';
import ReadTime from './components/ReadTime';
import Author from './components/Author';
import PublishDate from './components/PublishDate';
import { Container, Wrapper, Info } from './styles/EventsInfoBar';

const EventsInfoBar = ({ readTime, author, publishDate }) => (
  <Container>
    <Wrapper className="events_meta">
      <Info>
        <ReadTime readTime={readTime} />
        <Author author={`${author?.firstName} ${author?.lastName}`} />
        <PublishDate publishDate={publishDate} />
      </Info>
    </Wrapper>
  </Container>
);

export default EventsInfoBar;
