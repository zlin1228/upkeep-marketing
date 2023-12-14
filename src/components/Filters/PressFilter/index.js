import React from 'react';
import { Container, Button } from './styles/PressFilter';

const PressFilter = ({
  filters,
  posts,
  setPosts,
  activeFilter,
  setActiveFilter,
}) => {
  const handleFilter = filter => {
    if (activeFilter === filter) {
      setActiveFilter('');
      setPosts(posts);
    } else {
      setActiveFilter(filter);
      setPosts(posts.filter(post => post.date === filter));
    }
  };

  return (
    <Container>
      {filters?.map(filter => (
        <Button
          key={filter}
          type="button"
          onClick={() => handleFilter(filter)}
          className={activeFilter === filter ? 'active' : ''}
        >
          {filter}
        </Button>
      ))}
    </Container>
  );
};

export default PressFilter;
