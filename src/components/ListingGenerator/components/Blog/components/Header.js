import React from 'react';
import SearchBar from '../../../../../molecules/Search/Search';
import Icon from '../../../../../molecules/Icon';
import { Container, Wrapper, Button } from '../styles/Header.styled';

const Header = ({ data, numOfPosts, filteredPosts, setMobileFilterActive }) => (
  <Container>
    <SearchBar data={data} prefix="/blog" size="sm" />
    <Wrapper>
      <Button onClick={() => setMobileFilterActive(true)}>
        Filter
        <Icon id="fa-regular fa-sliders" width="16px" height="16px" />
      </Button>
      <p className="count">
        Showing <b>{numOfPosts}</b> of <b>{filteredPosts?.length} </b>
        results
      </p>
    </Wrapper>
  </Container>
);

export default Header;
