import React, { useRef, useState } from 'react';

import Icon from '../../../molecules/Icon';
import { CopyIcon, GptIcon, StarsIcon } from './components/Icons';

import { sampleQuestions } from './utils/functions';
import { handleSuggestedSearch } from '../../SiteSearch/utils/functions';
import useSiteSearch from '../../../hooks/useSiteSearch';

import { color } from '../../../atoms/colors';
import {
  Container,
  Content,
  Form,
  FormWrapper,
  FormControl,
  Header,
  Results,
  SearchSuggestions,
  Spinner,
  Section,
  Sidebar,
  SubmitButton,
} from './styles/index.styled';

const OpenAISearch = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestedSearch, setLoadingSuggestedSearch] = useState(false);

  const openaiRef = useRef(null);

  const {
    searchValue,
    setSearchValue,
    renderResults,
    loading,
    error,
    setError,
    handleSiteSearch,
  } = useSiteSearch(openaiRef);

  return (
    <Section>
      <Container>
        <Content>
          <Header>
            <p className="heading">What are you looking for?</p>
            <Form
              onSubmit={e => {
                handleSiteSearch(e, searchValue);
                handleSuggestedSearch({
                  e,
                  searchValue,
                  setSuggestions,
                  setLoadingSuggestedSearch,
                });
              }}
            >
              <FormWrapper>
                <FormControl>
                  <div className="gpt-icon">
                    <GptIcon />
                  </div>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={e => {
                      setSearchValue(e.target.value);
                      setError('');
                    }}
                  />
                </FormControl>
                <SubmitButton type="submit" name="submit">
                  <StarsIcon />
                  Submit
                  <StarsIcon />
                </SubmitButton>
              </FormWrapper>
              {error && <p className="c-error">{error}</p>}
            </Form>
          </Header>
          <Results loading={loading}>
            {!loading && !renderResults && <p>Results will appear here...</p>}
            {loading && (
              <Spinner>
                <Icon
                  id="fa-solid fa-spinner-third"
                  fillColor={color.darkBlue[1000]}
                />
              </Spinner>
            )}
            <p ref={openaiRef} className="description" />
            <p className="limit-text">
              {openaiRef.current?.innerHTML?.length || '0'}/1800
            </p>
          </Results>
          {!loadingSuggestedSearch && suggestions && suggestions?.length > 0 && (
            <SearchSuggestions>
              <p>Suggested Searches:</p>
              <ul>
                {suggestions?.map(question => (
                  <li key={question}>
                    <button
                      type="button"
                      onClick={e => {
                        openaiRef.current.scrollTop = 0;
                        setSearchValue(question);
                        handleSiteSearch(e, question);
                      }}
                    >
                      <span>{question}</span>
                      <div aria-label="Copy Question" className="copy-button">
                        <Icon
                          id="log-in-02"
                          width="16px"
                          height="16px"
                          fillColor={color.darkBlue[800]}
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </SearchSuggestions>
          )}
        </Content>
        <Sidebar>
          <div className="sidebar-heading">Don’t know what ask?</div>
          <ul className="sidebar-recommendations">
            {sampleQuestions.map(question => (
              <button
                type="button"
                className="question"
                onClick={() => setSearchValue(question)}
              >
                <li key={question}>
                  <span>{question}</span>
                  <div aria-label="Copy Question" className="copy-button">
                    <Icon
                      id="log-in-02"
                      width="16px"
                      height="16px"
                      fillColor={color.darkBlue[800]}
                    />
                  </div>
                </li>
              </button>
            ))}
          </ul>
        </Sidebar>
      </Container>
    </Section>
  );
};

export default OpenAISearch;
