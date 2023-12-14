import React, { useState } from 'react';
import Icon from '../Icon';
import { color } from '../../atoms/colors';
import { Form, Input, IconContainter } from './styles/SupportSearchBar.styled';
import { Label } from './styles/Search.styled';

const SupportSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    if (typeof window !== `undefined`) {
      window.location.href = `https://help.onupkeep.com/en/?q=${searchValue}`;
    }
  };

  return (
    <Form id="supportSearchBar" onSubmit={e => handleSearch(e)} size="lg">
      <Label htmlFor="search" />
      <Input
        type="text"
        size="lg"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Find anything (password, tracking, or privacy)"
      />
      <IconContainter size="lg">
        <Icon
          id="fa-solid fa-magnifying-glass"
          fillColor={color.darkBlue[900]}
        />
      </IconContainter>
    </Form>
  );
};

export default SupportSearchBar;
