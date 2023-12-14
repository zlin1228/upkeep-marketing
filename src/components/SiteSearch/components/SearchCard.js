import React from 'react';

import CallToAction from '../../CallToAction';

import { Container, Button } from '../styles/SearchCard.styled';

const SearchCard = ({
  customRef,
  title,
  description,
  url,
  question,
  setSearchValue,
  handleSiteSearch,
  algoliaSearch,
  contentRef,
}) => (
  <Container clickable={url || question}>
    {(title || question) && <p className="title">{title || question}</p>}
    {customRef && <p ref={customRef} className="description" />}
    {description && (
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
    {url && <CallToAction variant="Clickable" url={url} />}
    {question && (
      <Button
        type="button"
        onClick={e => {
          contentRef.current.scrollTop = 0;
          setSearchValue(question);
          handleSiteSearch(e, question);
          algoliaSearch({
            query: question,
            requestOptions: { hitsPerPage: 4 },
          });
        }}
      />
    )}
  </Container>
);

export default SearchCard;
