import React, { useState } from 'react';
import Search from '../../../molecules/Search/Search';
import Icon from '../../../molecules/Icon';
import {
  Wrapper,
  DesktopFilter,
  Left,
  Right,
  Button,
} from './styles/FilterBar.styled';
import Filter from './components/Filter';
import MobileFilter from './MobileFilter';

const FilterBar = ({
  activeIndex,
  podcasts,
  options,
  activeCategory,
  setActiveCategory,
}) => {
  const [mobileFilterActive, setMobileFilterActive] = useState(false);

  return (
    <Wrapper>
      <Left>
        <p>
          Showing <span>{activeIndex}</span> of <span>{podcasts?.length}</span>
        </p>

        <DesktopFilter>
          <Filter
            options={[{ category: 'Categories' }, ...options]}
            setActiveOption={setActiveCategory}
          />
        </DesktopFilter>
        <Button onClick={() => setMobileFilterActive(!mobileFilterActive)}>
          Filter
          <Icon id="fa-regular fa-sliders" width="12px" height="12px" />
        </Button>
      </Left>
      <Right>
        <Search prefix="/podcasts" size="sm" data={podcasts} />
      </Right>
      <MobileFilter
        options={options}
        podcasts={podcasts}
        mobileFilterActive={mobileFilterActive}
        setMobileFilterActive={setMobileFilterActive}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </Wrapper>
  );
};

export default FilterBar;
