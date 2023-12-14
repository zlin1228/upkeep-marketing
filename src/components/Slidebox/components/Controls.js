import React from 'react';

import { Button, Wrapper } from '../styles/Controls.styled';

const Controls = ({ items, itemThemes, activeItem, setActiveItem }) => {
  return (
    <Wrapper
      addPadding={itemThemes.includes('light')}
      numOfItems={items?.length}
    >
      {items?.map((item, idx) => (
        <Button
          key={item?.id}
          type="button"
          id={idx}
          className={activeItem === idx ? 'active' : ''}
          onClick={() => setActiveItem(idx)}
        >
          {item?.eyebrow}
          {!item?.image?.image?.gatsbyImageData && (
            <span className="heading">{item?.heading}</span>
          )}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Controls;
