import React, { useState, useRef } from 'react';

import Icon from '../../molecules/Icon';

import ExploreLinks from './components/ExploreLinks';
import Form from './components/Form';
import Loader from './components/Loader';
import SearchBlock from './components/SearchBlock';

import useAlgolia from '../../hooks/useAlgolia';
import useModal from '../../hooks/useModal';
import useSiteSearch from '../../hooks/useSiteSearch';

import { color } from '../../atoms/colors';
import {
  CloseButton,
  Container,
  Content,
  Footer,
  Header,
  Loading,
  MobileCloseButton,
  Modal,
  Text,
  List,
  Wrapper,
} from './styles/index.styled';

const SiteSearch = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestedSearch, setLoadingSuggestedSearch] = useState(false);

  const openaiRef = useRef(null);
  const contentRef = useRef(null);

  const { closeModal, isOpen } = useModal();

  const {
    searchValue,
    setSearchValue,
    renderResults,
    loading: gptLoading,
    error,
    setError,
    handleSiteSearch,
    handleCancelSearch,
  } = useSiteSearch(openaiRef);

  const {
    search: algoliaSearch,
    searchResponse: algoliaResponse,
    loading: algoliaLoading,
  } = useAlgolia('upkeep_site');

  const uniqueHits = algoliaResponse?.hits.filter(
    (v, i, a) => a.findIndex(t => t.title === v.title) === i
  );
  const renderExploreLinks = !gptLoading && !renderResults;
  const renderLoading = gptLoading || algoliaLoading;
  const renderSearchResults = !gptLoading && !algoliaLoading && renderResults;

  return (
    <Modal isOpen={isOpen}>
      <Container>
        <Wrapper>
          <CloseButton
            aria-label="Close Modal"
            onClick={() => {
              closeModal();
              setTimeout(() => handleCancelSearch(), 500);
            }}
          >
            <Icon id="x-close" />
          </CloseButton>
          <Header>
            <Form
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSuggestions={setSuggestions}
              setLoadingSuggestedSearch={setLoadingSuggestedSearch}
              handleSiteSearch={handleSiteSearch}
              handleAlgoliaSearch={algoliaSearch}
              error={error}
              setError={setError}
              suggestions={suggestions}
            />
          </Header>
          <Content ref={contentRef} renderSearchResults={renderSearchResults}>
            {renderExploreLinks && <ExploreLinks />}
            {renderLoading && (
              <Loading>
                <Loader />
              </Loading>
            )}
            <List render={renderSearchResults}>
              <SearchBlock
                customRef={openaiRef}
                heading="UpKeep AI Suggestion"
                textColor={color.darkBlue[600]}
                loading={gptLoading}
              />
              <SearchBlock
                heading="Search Results"
                textColor={color.darkBlue[600]}
                list={uniqueHits}
                loading={algoliaLoading}
              />
              {!loadingSuggestedSearch && (
                <SearchBlock
                  heading="Relevant Search Suggestions"
                  icon="stars-02"
                  textColor={color.steel[700]}
                  suggestions={suggestions}
                  setSearchValue={setSearchValue}
                  handleSiteSearch={handleSiteSearch}
                  algoliaSearch={algoliaSearch}
                  contentRef={contentRef}
                />
              )}
            </List>
          </Content>
          <Footer>
            <MobileCloseButton
              onClick={() => {
                closeModal();
                setTimeout(() => handleCancelSearch(), 500);
              }}
            >
              Close
            </MobileCloseButton>
            <Text>
              Powered by
              <Icon
                id="chat-gpt"
                width="24px"
                height="24px"
                fillClor={color.common.white}
              />
            </Text>
          </Footer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default SiteSearch;
