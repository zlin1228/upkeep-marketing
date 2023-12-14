import React from 'react';

import Icon from '../../../molecules/Icon';

import { handleSuggestedSearch } from '../utils/functions';

import { color } from '../../../atoms/colors';
import {
  Container,
  Wrapper,
  FormControl,
  Label,
  Input,
  Button,
} from '../styles/Form.styled';

const Form = ({
  searchValue,
  setSearchValue,
  setSuggestions,
  setLoadingSuggestedSearch,
  handleSiteSearch,
  handleAlgoliaSearch,
  error,
  setError,
}) => {
  const handleSubmit = e => {
    handleSiteSearch(e, searchValue);
    handleAlgoliaSearch({
      query: searchValue,
      requestOptions: { hitsPerPage: 4 },
    });
    handleSuggestedSearch({
      e,
      searchValue,
      setSuggestions,
      setLoadingSuggestedSearch,
    });
  };

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Wrapper>
        <FormControl>
          <Icon
            id="search-lg"
            className="search-icon"
            width="24px"
            height="24px"
            strokeColor={color.steel[700]}
          />
          <Label htmlFor="search" aria-label="Search" aria-hidden="true" />
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Ask us anything"
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
              setError('');
            }}
          />
        </FormControl>
        <Button type="submit" name="submit">
          <Icon
            id="stars-01"
            width="20px"
            height="20px"
            fillColor={color.yellow[700]}
          />
          Search
          <Icon
            id="stars-01"
            width="20px"
            height="20px"
            fillColor={color.yellow[700]}
          />
        </Button>
      </Wrapper>
      {error && <p className="error-msg">{error}</p>}
    </Container>
  );
};

export default Form;
