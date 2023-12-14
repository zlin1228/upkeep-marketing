import React from 'react';

import ReadTime from './components/ReadTime';
import Author from './components/Author';
import PublishDate from './components/PublishDate';

import { Container } from './styles/InfoBar';

const InfoBar = ({ readTime, author, publishDate }) => (
  <Container>
    <ReadTime readTime={readTime} />
    <Author author={author} />
    <PublishDate publishDate={publishDate} />
  </Container>
);

export default InfoBar;
