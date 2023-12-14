import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MobileFilterHeader from './components/MobileFilterHeader';
import MobileFilterListItem from './components/MobileFilterListItem';
import SliderIcon from '../../../assets/slider-icon.svg';
import {
  FilterButton,
  Container,
  Overlay,
  Wrapper,
  ListsWrapper,
  List,
  Buttons,
  Button,
} from './styles/MobileFilter.styled';

const MobileFilter = ({ data }) => {
  const { t } = useTranslation();
  const [filterActive, setFilterActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(0);
  const { width } = useWindowSize();

  if (width > 992) return null;
  return (
    <>
      <FilterButton onClick={() => setFilterActive(true)}>
        {t('Filter')}
        <img src={SliderIcon} alt="Slider Icon" />
      </FilterButton>
      <Container className={filterActive ? 'active' : ''}>
        <Overlay className={filterActive ? 'active' : ''} />
        <Wrapper className={filterActive ? 'active' : ''}>
          <MobileFilterHeader setMobileFilter={setFilterActive} />
          <ListsWrapper>
            <List>
              {data?.map(
                ({ text, options, activeFilter, setActiveFilter }, index) => (
                  <MobileFilterListItem
                    index={index}
                    key={text}
                    text={text}
                    options={options}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                )
              )}
            </List>
          </ListsWrapper>
          <Buttons>
            <Button
              type="button"
              className="reset"
              onClick={() => {
                setFilterActive(false);
                data.map(({ text, setActiveFilter }) => setActiveFilter(text));
              }}
            >
              {t('Reset')}
            </Button>
            <Button
              type="button"
              className="done"
              onClick={() => setFilterActive(false)}
            >
              {t('Done')}
            </Button>
          </Buttons>
        </Wrapper>
      </Container>
    </>
  );
};

export default MobileFilter;
