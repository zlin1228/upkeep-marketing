import React, { useState } from 'react';
import shortid from 'shortid';
import Card from './Card';
import Slide from './Slide';
import { CategoryContainer, CardContainer } from '../styles/Category.styled';

const Category = ({ item }) => {
  const setDefault = 0;
  const [active, setActive] = useState(setDefault);

  const handleCategoryClick = id => {
    setActive(id);
  };

  return (
    <CategoryContainer>
      <CardContainer>
        {item?.offsetSwitcherSlides.map((card, index) => (
          <Card
            key={shortid.generate()}
            card={card}
            id={index}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </CardContainer>
      {item?.offsetSwitcherSlides.map((slide, index) => (
        <Slide
          key={shortid.generate()}
          slide={slide}
          active={active}
          id={index}
        />
      ))}
    </CategoryContainer>
  );
};

export default Category;
