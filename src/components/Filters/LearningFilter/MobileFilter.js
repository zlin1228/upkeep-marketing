import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MobileFilterGroup from './components/MobileFilterGroup';
import { getCategories } from './utils';
import FilterIcon from '../../../assets/filter-icon.svg';
import { color } from '../../../atoms/colors';
import {
  Wrapper,
  Container,
  Header,
  Text,
  CloseBtn,
  Filters,
  Footer,
  ResetBtn,
  DoneBtn,
} from './styles/MobileFilter.styled';
import Icon from '../../../molecules/Icon';

const MobileFilter = ({
  posts,
  activeFilters,
  setActiveFilters,
  mobileFilterActive,
  setMobileFilterActive,
}) => {
  const { t } = useTranslation();
  const formattedCategories = getCategories(posts);

  return (
    <Wrapper mobileFilterActive={mobileFilterActive}>
      <Container mobileFilterActive={mobileFilterActive}>
        <Header>
          <Text>
            {t('Filter')}
            <img src={FilterIcon} alt="Filter Icon" />
          </Text>
          <CloseBtn onClick={() => setMobileFilterActive(false)}>
            <Icon id="fa-regular fa-xmark" fillColor={color.darkBlue[900]} />
          </CloseBtn>
        </Header>
        <Filters>
          {formattedCategories.map(cat => (
            <MobileFilterGroup
              key={cat.type}
              {...cat}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          ))}
        </Filters>
        <Footer>
          <ResetBtn
            type="button"
            aria-label="Reset"
            onClick={() => setActiveFilters([])}
          >
            {t('Reset')}
          </ResetBtn>
          <DoneBtn
            type="button"
            aria-label="Done"
            onClick={() => setMobileFilterActive(false)}
          >
            {t('Done')}
          </DoneBtn>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default MobileFilter;
