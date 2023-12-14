import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Search from '../../../molecules/Search/Search';
import Filter from './components/Filter';

import SliderIcon from '../../../assets/slider-icon.svg';

import {
  Section,
  Wrapper,
  Header,
  Filters,
  MobileFilters,
  MobileButton,
} from './styles/index.styled';
import formatEdgesToNodes from '../../../utils/formatEdgesToNodes';

const FilterBar = ({
  allPosts,
  activePosts,
  successStories,
  industries,
  activeIndustry,
  setActiveIndustry,
  setActiveFilter,
  setMobileFilter,
}) => {
  const { t } = useTranslation();

  const filter = [
    t('Sort by Newest'),
    t('Sort by Oldest'),
    t('Alphabetically A-Z'),
    t('Alphabetically Z-A'),
  ];

  return (
    <Section>
      <Header>
        <p className="heading">{t('Browse Case Studies')}</p>
        <p className="subhead">
          {t('Looking for something specific? Click on a category below!')}
        </p>
      </Header>
      <Wrapper>
        <Filters>
          <Filter
            options={[t('Industry'), ...industries]}
            setActiveOption={setActiveIndustry}
          />
          <Filter options={filter} setActiveOption={setActiveFilter} />
        </Filters>
        <Search
          data={formatEdgesToNodes(successStories)}
          prefix="/customers"
          size="sm"
        />
      </Wrapper>
      <MobileFilters>
        <MobileButton onClick={() => setMobileFilter(true)}>
          {t('Filter')}
          <img src={SliderIcon} alt="Slider Icon" />
        </MobileButton>
        <p>
          {t('Showing')} {activePosts?.length} {t('of')}{' '}
          {activeIndustry !== 'Industry'
            ? allPosts?.filter(node => node?.industry?.name === activeIndustry)
                ?.length
            : allPosts?.length}
        </p>
      </MobileFilters>
    </Section>
  );
};

export default FilterBar;
