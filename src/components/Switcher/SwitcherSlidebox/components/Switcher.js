import React from 'react';
import shortid from 'shortid';
import SwitcherItem from './SwitcherItem';
import List from '../styles/Switcher.styled';

const Switcher = ({
  listItems,
  activeDropdownIndex,
  setActiveDropdownIndex,
  isActive,
  theme,
}) => (
  <List layout>
    {listItems?.map((slide, index) => (
      <SwitcherItem
        key={shortid.generate()}
        index={index}
        {...slide}
        activeDropdownIndex={activeDropdownIndex}
        setActiveDropdownIndex={setActiveDropdownIndex}
        isActive={isActive}
        theme={theme}
      />
    ))}
  </List>
);

export default Switcher;
