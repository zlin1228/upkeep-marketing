import React, { useState } from 'react';
import shortid from 'shortid';
import { SwitcherContainer } from './styles/OffsetSwitcher.styled';
import Toggle from './components/Toggle';
import Category from './components/Category';
import Header from './components/Header';

const OffsetSwitcher = ({ component }) => {
  const defaultCategory = 0;
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleToggle = value => {
    value
      ? setSelectedCategory(value)
      : setSelectedCategory(selectedCategory === 0 ? 1 : 0);
  };

  return (
    <SwitcherContainer>
      <Header component={component} />
      <Toggle
        categories={component?.offsetSwitcherCategories}
        handleToggle={handleToggle}
        selectedCategory={selectedCategory}
      />
      {component?.offsetSwitcherCategories.map((item, index) => (
        <div
          key={shortid.generate()}
          className={selectedCategory === index ? 'show' : 'hide'}
        >
          <Category item={{ ...item, index }} />
        </div>
      ))}
    </SwitcherContainer>
  );
};

export default OffsetSwitcher;
