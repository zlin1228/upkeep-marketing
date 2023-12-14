import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import MobileFilterHeader from './components/MobileFilterHeader';
import MobileFilterListItem from './components/MobileFilterListItem';

import createFiltersArray from './utils/createFiltersArray';

const MobileFilter = ({
  data,
  mobileFilter,
  setMobileFilter,
  activeIndustry,
  setActiveIndustry,
  activeFilter,
  setActiveFilter,
}) => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(0);
  const { width } = useWindowSize();
  const filters = createFiltersArray(
    data,
    t,
    activeIndustry,
    setActiveIndustry,
    activeFilter,
    setActiveFilter
  );

  if (width > 576) return null;
  return (
    <Container className={mobileFilter ? 'active' : ''}>
      <Overlay className={mobileFilter ? 'active' : ''} />
      <Wrapper className={mobileFilter ? 'active' : ''}>
        <MobileFilterHeader setMobileFilter={setMobileFilter} />
        <ListsWrapper>
          <List>
            {filters?.map((filter, index) => (
              <MobileFilterListItem
                index={index}
                key={filter?.text}
                text={filter?.text}
                options={filter?.options}
                filters={filter?.filters}
                setFilters={filter?.setter}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </List>
        </ListsWrapper>
        <Buttons>
          <Button
            type="button"
            className="reset"
            onClick={() => {
              setMobileFilter(false);
              setActiveIndustry('Industry');
              setActiveFilter('Sort by Newest');
            }}
          >
            {t('Reset')}
          </Button>
          <Button
            type="button"
            className="done"
            onClick={() => setMobileFilter(false)}
          >
            {t('Done')}
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default MobileFilter;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
  pointer-events: none;
  &.active {
    pointer-events: all;
  }
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  transition: all 300ms ease-in-out;
  &.active {
    background: rgb(40, 47, 60, 0.5);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 32px rgba(0, 123, 255, 0.1);
  border-radius: 25px 25px 0px 0px;
  transform: translateY(100%);
  transition: all 300ms ease-in-out;
  &.active {
    transform: translateY(0px);
  }
`;
const List = styled.ul`
  width: 100%;
  height: auto;
  padding: 0px 32px;
  list-style: none;
  margin: 0px;
  li .dropdown-btn:last-child {
    border-top: 1px solid #f5f6f9;
    border-bottom: 1px solid #f5f6f9;
  }
`;
const ListsWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0px 0px 16px;
`;
const Buttons = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px 32px 96px;
  display: flex;
  align-items: center;
  background: #ffffff;
  z-index: 9999;
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  &:focus {
    outline: none;
  }
  &.reset {
    border: 2px solid #007bff;
    background: #ffffff;
    color: #007bff;
    margin-right: 12px;
  }
  &.done {
    background: #007bff;
    border: none;
    outline: none;
    color: #ffffff;
    margin-left: 12px;
  }
`;
