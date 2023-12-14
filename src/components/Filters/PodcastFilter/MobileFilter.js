import React from 'react';
import Icon from '../../../molecules/Icon';
import Dropdown from './components/Dropdown';
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
  options,
  activeCategory,
  setActiveCategory,
  mobileFilterActive,
  setMobileFilterActive,
}) => {
  return (
    <Container>
      <Overlay className={mobileFilterActive ? 'active' : ''} />
      <Wrapper className={mobileFilterActive ? 'active' : ''}>
        <Header>
          <Text>
            <p className="heading">Filter</p>
            <Icon id="fa-regular fa-sliders" width="16px" height="16px" />
          </Text>
          <Close onClick={() => setMobileFilterActive(false)}>
            <Icon id="fa-regular fa-xmark" width="20px" height="20px" />
          </Close>
        </Header>
        <Dropdown
          options={options}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Buttons>
          <button
            type="button"
            className="reset"
            onClick={() => setActiveCategory('Categories')}
          >
            Reset
          </button>
          <button
            type="button"
            className="done"
            onClick={() => setMobileFilterActive(false)}
          >
            Done
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default MobileFilter;
