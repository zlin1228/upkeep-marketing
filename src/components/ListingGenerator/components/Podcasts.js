import React, { useState, useEffect } from 'react';
import PodcastsCard from '../../Cards/PodcastsCard';
import usePodcastsData from '../utils/usePodcastsData';
import { Section, Wrapper, Grid, Button } from '../styles/Podcasts.styled';
import { fetchCatsWithCount } from '../../Filters/PodcastFilter/utils/fetchCategories';
import filters from '../../Filters/PodcastFilter/utils/filters';

import FilterBar from '../../Filters/PodcastFilter/FilterBar';

const Podcasts = ({ type }) => {
  const podcasts = usePodcastsData(type);
  const categoryOptionsWithCount = fetchCatsWithCount(podcasts);
  const [sliceIndex, setSliceIndex] = useState(12);
  const [activeIndex, setActiveIndex] = useState(12);
  const [activeCategory, setActiveCategory] = useState('Categories');
  const [activePodcasts, setActivePodcasts] = useState([...podcasts]);

  useEffect(() => {
    const podcastCards = document.querySelectorAll('.podcasts-card');
    setActiveIndex(podcastCards.length);
  });

  useEffect(() => {
    filters(podcasts, activeCategory, setActivePodcasts);
  }, [activeCategory]);

  return (
    <Section>
      <Wrapper>
        <FilterBar
          activeIndex={activeIndex}
          podcasts={activePodcasts}
          options={categoryOptionsWithCount}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Grid>
          {activePodcasts?.slice(0, sliceIndex).map(({ node }) => (
            <PodcastsCard key={node?.id} data={node} />
          ))}
        </Grid>
        {activePodcasts?.length > sliceIndex && (
          <Button onClick={() => setSliceIndex(sliceIndex + 12)}>
            <span>View More</span>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#DE1824"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        )}
      </Wrapper>
    </Section>
  );
};

export default Podcasts;
