import React, { useState, useRef } from 'react';
import PressCard from '../../../Cards/PressCard';
import PressFilter from '../../../Filters/PressFilter';
import Pagination from '../../../../molecules/Pagination';
import usePagination from '../../../../molecules/Pagination/utils/usePagination';
import { usePressReleasesData } from '../../utils/usePressReleasesData';
import { Section, Wrapper, Header, Grid } from './styles/index.styled';

const PressReleases = () => {
  const data = usePressReleasesData();
  const dates = [...new Set(data.map(post => post.date))].sort((a, b) => b - a);

  const contentRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState('');
  const [posts, setPosts] = useState(data);

  const {
    activePosts,
    currentPage,
    nextPage,
    pageNumbers,
    paginate,
    prevPage,
  } = usePagination({
    postsPerPage: 6,
    posts,
    scrollRef: contentRef,
    scrollOffset: 300,
  });

  return (
    <Section>
      <Wrapper>
        <Header>
          <p className="heading">Press</p>
          <PressFilter
            filters={dates}
            posts={data}
            setPosts={setPosts}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </Header>
        <Grid ref={contentRef}>
          {activePosts?.map(post => (
            <PressCard key={post?.id} component={post} />
          ))}
        </Grid>
        <Pagination
          pageNumbers={pageNumbers}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Wrapper>
    </Section>
  );
};

export default PressReleases;
