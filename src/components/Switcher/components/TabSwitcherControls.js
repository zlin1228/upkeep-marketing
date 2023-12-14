import React from 'react';
import { Wrapper, Tab } from '../styles/TabSwitcherControls.styled';

const TabSwitcherControls = ({ component, activeIndex, setActiveIndex }) => (
  <Wrapper>
    {component?.tabSwitcherSlide?.map((item, index) => (
      <Tab
        key={item?.id}
        onClick={() => setActiveIndex(index)}
        index={index}
        activeIndex={activeIndex}
      >
        {item?.tabLabel}
      </Tab>
    ))}
  </Wrapper>
);

export default TabSwitcherControls;
