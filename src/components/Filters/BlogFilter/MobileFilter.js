import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Icon from '../../../molecules/Icon';
import Dropdown from './components/Dropdown';
import { fetchBlogCategories } from './utils/helpers';
import {
  Container,
  Overlay,
  Wrapper,
  Header,
  Text,
  Close,
  Buttons,
} from './styles/MobileFilter.styled';

const MobileFilter = ({
  data,
  activeCategory,
  setActiveCategory,
  mobileFilterActive,
  setMobileFilterActive,
}) => {
  const { t } = useTranslation();
  const categories = fetchBlogCategories(data);

  return (
    <Container>
      <Overlay className={mobileFilterActive ? 'active' : ''} />
      <Wrapper className={mobileFilterActive ? 'active' : ''}>
        <Header>
          <Text>
            <p className="heading">{t('Filter')}</p>
            <Icon id="fa-regular fa-sliders" width="16px" height="16px" />
          </Text>
          <Close onClick={() => setMobileFilterActive(false)}>
            <Icon id="fa-regular fa-xmark" width="20px" height="20px" />
          </Close>
        </Header>
        <Dropdown
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Buttons>
          <button
            type="button"
            className="reset"
            onClick={() => setActiveCategory('')}
          >
            {t('Reset')}
          </button>
          <button
            type="button"
            className="done"
            onClick={() => setMobileFilterActive(false)}
          >
            {t('Done')}
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default MobileFilter;
