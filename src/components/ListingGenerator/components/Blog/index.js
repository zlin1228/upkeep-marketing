import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Search from '../../../../molecules/Search/Search';
import Pagination from '../../../../molecules/Pagination';
import usePagination from '../../../../molecules/Pagination/utils/usePagination';
import usePaginationCount from '../../../../molecules/Pagination/utils/usePaginationCount';

import Header from './components/Header';
import BlogCard from '../../../Cards/BlogCard';
import BlogFilter from '../../../Filters/BlogFilter';
import MobileFilter from '../../../Filters/BlogFilter/MobileFilter';
import NewsletterCard from '../../../Forms/NewsletterCard';

import { filterPosts } from './utils/helpers';
import formatEdgesToNodes from '../../../../utils/formatEdgesToNodes';

import {
  Section,
  Wrapper,
  Container,
  Sidebar,
  Content,
  Heading,
  Grid,
} from './styles/index.styled';

const Blog = ({ data, showAnnouncementBar }) => {
  const { t } = useTranslation();
  const sectionRef = useRef();

  const [mobileFilterActive, setMobileFilterActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  const filteredPosts = filterPosts(data, activeCategory);
  const postsPerPage = 12;

  const { activePosts, currentPage, pageNumbers, paginate } = usePagination({
    posts: filteredPosts,
    postsPerPage,
    scrollRef: sectionRef,
    scrollOffset: 150,
  });

  const { numOfPosts } = usePaginationCount({
    paginatedPosts: activePosts,
    filteredPosts,
    postsPerPage,
    currentPage,
    pageNumbers,
  });

  useEffect(() => {
    paginate(1);
  }, [activeCategory]);

  return (
    <Section ref={sectionRef}>
      <MobileFilter
        data={data}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        mobileFilterActive={mobileFilterActive}
        setMobileFilterActive={setMobileFilterActive}
      />
      <Wrapper>
        <Header
          data={formatEdgesToNodes(data)}
          filteredPosts={filteredPosts}
          numOfPosts={numOfPosts}
          setMobileFilterActive={setMobileFilterActive}
        />
        <Container>
          <Sidebar showAnnouncementBar={showAnnouncementBar}>
            <Search data={formatEdgesToNodes(data)} prefix="/blog" size="sm" />
            <BlogFilter
              data={data}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </Sidebar>
          <Content>
            <Heading className="heading">
              <p className="heading">{t('Most Recent')}</p>
              <p className="subhead">
                {t('Showing')} <b>{numOfPosts}</b> {t('of')}{' '}
                <b>{filteredPosts?.length} </b>
                {t('results')}
              </p>
            </Heading>
            <Grid className="grid">
              {activePosts.map(post => (
                <BlogCard component={post} showPublishDate />
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              paginate={paginate}
            />
            <NewsletterCard />
          </Content>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Blog;
